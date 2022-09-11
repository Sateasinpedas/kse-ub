import { getDocs } from "firebase/firestore";
import { IKImage } from "imagekitio-react";
import React from "react";
import { testimoniRef } from "../../../firebase/firebase";
import Button from "../Button/Button";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function CardTestimony() {
    const [testimonies, setTestimonies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getDocs(testimoniRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    setTestimonies(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, [])

    return (
        <div className="m-4 w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar Testimoni</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div>
                    {
                        (testimonies.length === 0 && isLoading === false) && <p className="italic text-slate-700">Data FAQ tidak ditemukan</p>
                    }
                    {
                        isLoading ? <SkeletonLoader preset='facebook'/>
                        :
                        testimonies.map((item, index) => {
                            return (
                                <div className="daftar-berita flex items-start" key={index}>
                                    <div className="p-2 rounded-[50%] overflow-hidden h-12 w-12">
                                        <IKImage
                                            publickey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
                                            urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
                                            path={item?.image_link}
                                        />
                                    </div>
                                    <div className="ml-2">
                                        <a onClick={() => localStorage.setItem('testimoni', JSON.stringify(item))} href={`/admin/testimoni/${item.nama.replace("?", "")}/edit`}>
                                            <h4 className="text-slate-600 font-semibold mb-2">{item.nama}</h4>
                                        </a>
                                        <p className="text-slate-500 text-sm mb-5">{item.description.substring(0, 150)}...</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <Button href='/admin/testimoni/add' className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Add testimony</Button>
            </div>
        </div>
    );
}