'use client';

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
 const { data: session, status } = useSession();
 const isLoading = status === "loading";

 const handleSignIn = async () => {
   try {
     await signIn("google", { callbackUrl: '/' });
   } catch (error) {
     console.log("Sign in error:", error);
   }
 };

 const handleSignOut = async () => {
   try {
     await signOut({ callbackUrl: '/' });
   } catch (error) {
     console.log("Sign out error:", error);
   }
 };

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
         <Link href="/startup/create" className="hover:text-gray-700">
           <span>Create</span>
         </Link>

         {isLoading ? (
           <Button disabled className="bg-gray-100">
             Loading...
           </Button>
         ) : session ? (
           <div className="flex items-center gap-4">
             {session.user?.image && (
               <Image
                 src={session.user.image}
                 alt={session.user.name ?? "Profile"}
                 width={32}
                 height={32}
                 className="rounded-full"
               />
             )}
             <span className="text-sm">{session.user?.name}</span>
             <Button 
               onClick={handleSignOut}
               className="bg-gray-100 text-gray-700 hover:bg-gray-200"
             >
               Sign Out
             </Button>
           </div>
         ) : (
           <Button 
             onClick={handleSignIn}
             className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
           >
             <svg
               className="w-5 h-5"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                 fill="#FFC107"
               />
               <path
                 d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                 fill="#FF3D00"
               />
               <path
                 d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.399 18 7.19003 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                 fill="#4CAF50"
               />
               <path
                 d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                 fill="#1976D2"
               />
             </svg>
             Sign in with Google
           </Button>
         )}
       </div>
     </nav>
   </header>
 );
};

export default NavBar;