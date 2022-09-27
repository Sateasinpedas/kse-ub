import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Button from "../Button/Button";

export default function FAQDropdown({ faq }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={`${!isOpen && 'shadow'} p-3 rounded-lg flex items-center justify-between cursor-pointer my-5`}>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition ${isOpen && 'text-purple'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <p className={`ml-2 transition ${isOpen && 'text-purple'}`}>{faq.title}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ml-2 transition ${isOpen && '-rotate-180 text-purple'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <AnimatePresence>
                {isOpen && <DropDownContent faq={faq} isOpen={isOpen} setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </div>
    );
}

function DropDownContent({ isOpen, setIsOpen, faq }) {
    return (
        <motion.div onClick={() => setIsOpen(!isOpen)} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="cursor-pointer p-3 rounded-b-lg shadow">
            <p>{faq.answer}</p>
            <div onClick={() => localStorage.setItem('faq', JSON.stringify(faq))} >
                <Button href={`/admin/faq/${faq.id}/edit`} endIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                } className="bg-purple text-white mt-3">Visit</Button>
            </div>
        </motion.div>
    );
}