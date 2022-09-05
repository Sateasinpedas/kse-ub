import React from "react";

export default function Feedback({testimony, swipeTo, id, length}) {
    const btnNextRef = React.useRef(null);
    const btnPrevRef = React.useRef(null);

    const slideNext = () => {
        swipeTo.slideNext();
    }

    const slidePrev = () => {
        swipeTo.slidePrev();
    }

    return (
        <div className="bg-purple p-5 rounded-lg text-white mx-2">
            <div className="text-left">
                <h1 className="font-bold text-2xl">Kata Beswan</h1>
                <p className="mt-5 text-[17px]">{testimony.description}</p>
            </div>
            <div className="text-left text-sm mt-5 flex md:items-center justify-between md:flex-row flex-col ">
                <div className="flex items-center md:mb-0 mb-5">
                    <img src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='human' className="rounded-xl" style={{ width: '60px', height: '60px' }} />
                    <div className="ml-2">
                        <p>{testimony.nama}</p>
                        <p>{testimony.prodi}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button ref={btnPrevRef} className={`${id === 1 ? 'bg-gray cursor-not-allowed focus:ring-0' : ''} bg-white outline-none p-2 rounded-lg text-black focus:ring-4 focus:ring-orange transition`} onClick={slidePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button ref={btnNextRef} className={`${id === length ? 'bg-gray cursor-not-allowed focus:ring-0' : ''} bg-white outline-none p-2 rounded-lg ml-2 text-black focus:ring-4 focus:ring-orange transition`}  onClick={slideNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}