import { Button } from "@metalnethq/baremetal-ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      Home Page
      <Link
        href="/auth"
        className="px-3 mt-3 py-1 bg-blue-700 text-white rounded"
      >
        Signup
      </Link>
    </main>
  );
}
