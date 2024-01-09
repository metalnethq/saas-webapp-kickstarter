"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Text } from "@metalnethq/baremetal-ui";
import { FiAirplay } from "react-icons/fi";
import menuItems from "./_common/menuItems.data";
import Image from "next/image";
import Logo from "./_common/logo";

export default function Page() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    redirect("/auth");
  }

  return (
    <div className="w-full h-full bg-gray-50">
      <aside className="bg-bm_primary-600 flex fixed left-0 top-0 h-full w-96 flex-col items-stretch">
        <div className="py-3 px-3 mt-10 mb-5">
          <Logo />
        </div>
        <nav className="flex-grow">
          <div>
            <Text
              className="px-3 py-1 text-bm_light-300 text-sm"
              weight="semiBold"
            >
              Main section
            </Text>
            <ul className="p-3">
              <li key={1}>
                <a
                  href={"#"}
                  className="text-white bg-bm_primary-800  w-full flex p-3 rounded mb-3 items-center"
                >
                  <FiAirplay className="mr-3" />
                  <span>Active Item</span>
                </a>
              </li>
              {menuItems.main.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-white  w-full flex p-3 rounded mb-3 items-center"
                  >
                    {<item.Icon className="mr-3" />}
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text
              className="px-3 py-1 text-bm_light-300 text-sm mt-4"
              weight="semiBold"
            >
              Secondary section
            </Text>
            <ul className="p-3">
              {menuItems.secondary.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-white  w-full flex p-3 rounded mb-3 items-center"
                  >
                    {<item.Icon className="mr-3" />}
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <footer className="p-3">
          <div className="flex items-center ">
            <Image
              width={36}
              height={36}
              src={session?.data?.user?.image as string}
              alt="User Image"
              className="rounded-full"
            />
            <div className="ml-3 text-white cursor-pointer">
              <Text
                el="span"
                weight="default"
                className="text-white"
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
