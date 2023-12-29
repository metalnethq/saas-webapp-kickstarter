import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { authOptions } from "../_common/authOptions";

export const handler = NextAuth(authOptions as NextAuthOptions);

export { handler as GET, handler as POST };
