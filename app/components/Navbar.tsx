import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { auth, signIn, signOut } from "@/auth";

const NavBar = async () => {
  // const session = await auth();

  return (
    <header className="bg-white px-12 py-3 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logofinal.png"
            alt="logo"
            width={80}
            height={15}
            priority
          />
        </Link>

        <div className="flex items-center gap-5 text-black">
          <>
            <Link href="/startup/create" className="hover:text-gray-700">
              <span>Create</span>
            </Link>

            <button className="hover:text-gray-700">
              <span>Logout</span>
            </button>

            <Link href={"/"} className="hover:text-gray-700">
                <span>User</span>
              </Link>
          </>
        </div>

        {/* <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create" className="hover:text-gray-700">
                <span>Create</span>
              </Link>

              <form action={async () => {
                'use server';
                await signOut();
              }}>
                <button className="hover:text-gray-700">
                  <span>Logout</span>
                </button>
              </form>

              <Link href={`/user/${session.user.id}`} className="hover:text-gray-700">
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              'use server';
              await signIn('github');
            }}>
              <button className="hover:text-gray-700">
                <span>Login</span>
              </button>
            </form>
          )}
        </div> */}
      </nav>
    </header>
  );
};

export default NavBar;
