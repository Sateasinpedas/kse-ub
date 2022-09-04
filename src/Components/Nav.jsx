import KSELogo from '../assets/logo_kse.svg';
import { motion } from 'framer-motion';
import React from 'react';

const navLink = [
    {
        name: 'Beranda',
        link: '/'
    },
    {
        name: 'Tentang',
        link: '/about'
    },
    {
        name: 'Kabar Paguyuban',
        link: '/kabar-paguyuban'
    },
    {
        name: 'Kontak',
        link: '/kontak'
    },
];

export default function Nav() {
    const [isShadowed, setIsShadowed] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setIsShadowed(true);
        }

        else
            setIsShadowed(false);
    })

    return (
        <>
            <nav className={`bg-purple fixed top-0 h-[90px] w-full flex items-center justify-between px-[50px] md:px-[100px] text-white font-sans z-40  transition duration-300 ${isShadowed ? 'shadow-lg' : ''}`}>
                <div>
                    <img src={KSELogo} alt="logo kse" className='h-[70px]' />
                </div>
                <div className='list-none md:flex hidden'>
                    {
                        navLink.map((link, index) => {
                            return <a href={link.link} key={index} className="mx-5 hover:text-orange transition"><li>{link.name}</li></a>
                        })
                    }
                </div>
                <div className='nav-responsived list-none flex md:hidden relative'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'flex' : 'hidden'} font-sans flex-col px-[50px] shadow-lg bg-purple md:hidden w-full absolute left-0 top-20 py-5 `}>
                    {
                        navLink.map((link, index) => {
                            return (
                                <a href={link.link} key={index} className="py-3 border-b list-none w-full hover:text-orange transition">
                                    <li>{link.name}</li>
                                </a>
                            );
                        })
                    }
                </div>
            </nav>
            {/* darken bg */}
            {
                isOpen &&
                <div className='md:hidden fixed z-30 bg-[#0000006f] left-0 top-0 w-full bottom-0 right-0'></div>
            }
        </>
    );
}