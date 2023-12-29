import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import env from "./env";
import client from "./dynamoDBClient";
import { NextAuthOptions } from "next-auth";
import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: DynamoDBAdapter(client, {
    tableName: env.AWS_DYNAMODB_TABLE_NAME,
  }) as Adapter,
  secret: env.SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
    }),
    Github({
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.userId = user.id;
        console.log("update triggered");
      }

      if (token.userId && trigger === "update") {
        console.log("update triggered");
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
};
