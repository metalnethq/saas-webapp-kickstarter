"use client";
import { Button } from "@metalnethq/baremetal-ui";
import { signIn } from "next-auth/react";

const buttonClassNames = {
  google: "bg-[#ea4335] hover:bg-[#ea4335]",
  facebook: "bg-[#3b5998] hover:bg-[#3b5998]",
  github: "bg-[#333] hover:bg-[#333]",
  x: "bg-[#333] hover:bg-[#333]",
  linkedin: "bg-[#0077b5] hover:bg-[#0077b5]",
};

type AuthProvider = "google" | "facebook" | "github" | "linkedin";
const AuthProviderNames = {
  google: "Google",
  facebook: "Facebook",
  github: "GitHub",
  linkedin: "LinkedIn",
};

export function AuthButtons({
  authProviders,
}: {
  authProviders: AuthProvider[];
}) {
  return (
    <>
      {authProviders.map((provider) => (
        <Button
          key={provider}
          fullWidth
          className={`mb-4 ${buttonClassNames[provider]}`}
          onClick={() => signIn(provider, { redirect: false })}
        >
          {AuthProviderNames[provider]}
        </Button>
      ))}
    </>
  );
}
