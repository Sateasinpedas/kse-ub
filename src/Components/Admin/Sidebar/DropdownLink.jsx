import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
//32579619
export default function DropdownLink({ route }) {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        if (window.location.pathname.includes(route.link)) {
            setActive(true);
            setOpen(true);
        }
    }, [route.link])

    return (
        <div href={route?.link} className={`${(active) && 'bg-purple-extralight text-purple'} flex items-center p-3 rounded-xl hover:bg-purple-extralight hover:text-purple transition duration-200 w-fit my-5 min-w-[250px]`}>
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-row items-center">
                        {route.svg}
                        <p className="ml-2">{route.name}</p>
                    </div>
                    <div onClick={() => setOpen(!open)} className="rounded-full transition hover:bg-gray flex items-center justify-center ml-2 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? 'rotate-180' : ''} transition w-4 h-4`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <AnimatePresence>
                    {
                        open &&
                        <motion.div initial={{ height: 0 }} animate={{ height: 'fit-content' }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="">
                            {
                                route.dropDownLink.map((item, index) => {
                                    return (
                                        <LinkDropdown route={route} item={item} index={index} key={index} setActive={setActive} setOpen={setOpen} />
                                    );
                                })
                            }
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}

function LinkDropdown({ item, index }) {
    return (
        <Link to={item.link} className='m-3 flex items-center justify-start'>
            {item.svg}
            <div className="ml-2 text-sm" key={index}>{item?.name}</div>
        </Link>
    );
}