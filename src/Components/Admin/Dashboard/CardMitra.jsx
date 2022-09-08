import { IKImage } from "imagekitio-react";
import Button from "../Button/Button";

export default function CardMitra({ mitras }) {
    return (
        <div className="m-4 lg:w-[46%] w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar Mitra</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div className=" flex lg:justify-between w-full flex-wrap mb-10">
                    {
                        mitras.map((item, index) => {
                            return (
                                <div className="daftar-berita" key={index}>
                                    <Mitra mitra={item}/>
                                </div>
                            );
                        })
                    }
                </div>
                <Button className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Get Started</Button>
            </div>
        </div>
    );
}

function Mitra({mitra}){
    return(
        <div className="rounded-lg shadow flex flex-col items-center justify-center p-5 m-2 lg:w-[160px] w-full">
            <IKImage
            publickey={process.env.REACT_APP_PUBLIC_KEY}
            urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
            path={mitra.image_link}
            />
            <p className='mt-4'>{mitra.title}</p>
        </div>
    );
}