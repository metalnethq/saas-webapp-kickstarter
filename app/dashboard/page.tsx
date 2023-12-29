"use client";

import Image from "next/image";
import Logo from "./_common/logo";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Text } from "@metalnethq/baremetal-ui";

export default function Page() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    redirect("/auth");
  }

  return (
    <div className="w-full h-full bg-gray-50">
      <aside className="bg-white flex fixed left-0 top-0 h-full w-96 flex-col items-stretch">
        <div className=" p-3 ">
          <Logo />
        </div>
        <nav className="flex-grow">Menu items go here.</nav>
        <footer className="p-3">
          <div className="flex items-center ">
            <Image
              width={36}
              height={36}
              src={session?.data?.user?.image as string}
              alt="User Image"
              className="rounded-full"
            />
            <div className="ml-3 text-bm_info-600 cursor-pointer">
              <Text
                el="span"
                weight="extraLight"
                intent="info"
                onClick={() => signOut()}
              >
                Signout
              </Text>
            </div>
          </div>
        </footer>
      </aside>
    </div>
  );
}
