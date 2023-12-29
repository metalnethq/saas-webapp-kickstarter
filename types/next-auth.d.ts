import { DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}

declare module "next-auth" {
  export interface Session {
    user: DefaultUser;
  }

  interface User extends DefaultUser {}
}
