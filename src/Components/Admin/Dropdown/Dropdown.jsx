import React from "react";
import { motion } from 'framer-motion';
import { getAuth, signOut } from "firebase/auth";

function DropdownLink({ list, setOpenDropdown }) {
    const handleClick = () => {
        setOpenDropdown(false);
        list.action();
    }

    return (
        <div onClick={handleClick} className="text-sm flex items-center p-3 rounded-xl hover:bg-purple-extralight hover:text-purple transition duration-200 w-fit my-3 min-w-[200px]">
            <div>
                {list.svg}
            </div>
            <p className="ml-4">{list.name}</p>
        </div>
    );
}

export default function Dropdown({ setOpenDropdown }) {
    const signOutUser = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                console.log('success sign out')
            })
            .catch(() => {
                console.log('error signout')
            })
    }

    const handleLogout = () => {
        localStorage.removeItem('auth');
        signOutUser();
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    const lists = [
        {
            name: 'Sign out',
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>,
            action: () => handleLogout()
        }
    ]
    return (
        <motion.div exit={{ height: 0, opacity: 0 }} initial={{ height: 0, opacity: 0 }} animate={{ height: '100px', opacity: [0.5, 1] }} transition={{ duration: 0.1 }} className={`p-3 z-40 rounded-lg shadow-lg absolute bg-white right-0 top-14`}>
            {
                lists.map((list, index) => {
                    return <DropdownLink setOpenDropdown={setOpenDropdown} list={list} key={index} />
                })
            }
        </motion.div>
    );
}