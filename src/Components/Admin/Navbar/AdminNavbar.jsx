import { AnimatePresence } from "framer-motion";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import LogoKSE from "../../../assets/logo_kse.svg";

export default function AdminNavbar({ openSidebar, setOpenSidebar }) {
    const [openDropdown, setOpenDropdown] = React.useState(false);

    return (
        <div className="w-full bg-white fixed top-0 left-0 p-5 md:pl-[250px] flex items-center md:justify-end justify-between shadow z-30">
            <div className="md:hidden md:pl-10">
                <a className="flex items-center" href='/admin/dashboard'>
                    <img src={LogoKSE} alt='logo kse' className="w-12"/>
                    <h1 className="text-xl font-bold ml-2">KSE UB</h1>
                </a>
            </div>
            <div>
                <button className="relative" onClick={() => setOpenDropdown(!openDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${openDropdown ? 'fill-purple' : ''} hover:fill-purple transition w-6 h-6`}>
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    <AnimatePresence>
                        {openDropdown && <Dropdown setOpenDropdown={setOpenDropdown} />}
                    </AnimatePresence>
                </button>
                <button className="ml-5" onClick={() => setOpenSidebar(!openSidebar)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${openSidebar ? 'text-purple' : ''} transition duration-300 w-6 h-6 md:hidden`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            {/* backdrop */}
            { openDropdown && <div className="fixed top-0 left-0 right-0 bottom-0 z-30" onClick={() => setOpenDropdown(false)}></div> }
        </div>
    );
}