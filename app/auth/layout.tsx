"use client";

import { Card, Text, CardBody, CardHeading } from "@metalnethq/baremetal-ui";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({
  emailLink,
  social,
}: {
  emailLink: ReactNode;
  social: ReactNode;
}) {
  const session = useSession();

  const { status } = session;

  if (session.status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-row h-full">
      {status === "loading" ? (
        <div className="flex justify-center items-center h-full w-full">
          Loading your account details...
        </div>
      ) : (
        <>
          <div className=" basis-full md:basis-1/3 flex justify-center items-center">
            <Card width="3/4" className="shadow-none items-center md:w-1/2">
              <CardHeading
                el="div"
                wrapperClassName="border-0 p-0 text-center mb-10"
              >
                <Text
                  el="h1"
                  className="text-3xl text-bm_gray-400"
                  weight="bold"
                >
                  MetalNet <span className="text-bm_gray-800">HQ</span>
                </Text>
              </CardHeading>

              <CardBody el="div">
                {social}

                {emailLink}
              </CardBody>
            </Card>
          </div>
          <div className="hidden md:block bg-red-300 md:basis-2/3">
            <div className=" w-full bg-cover h-full bg-[url(https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg)]" />
          </div>
        </>
      )}
    </div>
  );
}
