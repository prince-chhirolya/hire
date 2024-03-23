"use client"
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
export default function Navbar() {

    const {data:session,status} = useSession();
    const [userImage,setUserImage]=React.useState("")
    React.useEffect(() => {
    if(status==="authenticated" && session.user){
         setUserImage(session.user.image)   
        }
    }, [status,session])
  return (
    <div>
            <nav className="bg-[#09090b] border-white mb-20 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" width={38} height={8}  alt="Flowbite Logo" />
                <span className="text-white self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
            </a>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <Image className=" rounded-full" src={userImage} width={38} height={38} alt="user photo"/>
                </button>
            </div>
            
            </div>
            </nav>
    </div>
  )
}
