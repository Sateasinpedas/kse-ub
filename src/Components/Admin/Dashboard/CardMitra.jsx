import { getDocs } from "firebase/firestore";
import { IKImage } from "imagekitio-react";
import React from "react";
import { mitraRef } from "../../../firebase/firebase";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function CardMitra() {
    const [mitras, setMitras] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchValue, setSearchvalue] = React.useState('');

    React.useEffect(() => {
        setIsLoading(true);
        getDocs(mitraRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    setMitras(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, [])

    return (
        <div className="m-4 lg:w-[46%] w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar Mitra</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div className="my-5">
                    <SearchInput placeholder='Search mitra' setSearchValue={setSearchvalue} />
                </div>
                <div className=" flex lg:justify-between w-full flex-wrap mb-10">
                    {
                        (mitras.length === 0 && isLoading === false) && <p className="italic text-slate-700">Data Mitra tidak ditemukan</p>
                    }
                    {
                        isLoading ? <SkeletonLoader preset='instagram' />
                            :
                            mitras.filter((mitra) => {
                                if (searchValue === '')
                                    return mitra
                                else return mitra.title.toLowerCase().includes(searchValue.toLowerCase())
                            }).map((item, index) => {
                                return (
                                    <div className="daftar-mitra lg:w-fit w-full" key={index}>
                                        <Mitra mitra={item} />
                                    </div>
                                );
                            })
                    }
                </div>
                <Button href='/admin/mitra/add' className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Tambah mitra</Button>
            </div>
        </div>
    );
}

function Mitra({ mitra }) {
    return (
        <div className="rounded-lg shadow flex flex-col items-center justify-center p-5 m-1 lg:w-[160px] w-full">
            <IKImage
                publickey={process.env.REACT_APP_PUBLIC_KEY}
                urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
                path={mitra.image_link}
                width="100%"
            />
            <a onClick={() => localStorage.setItem('mitra', JSON.stringify(mitra))} href={`/admin/mitra/${mitra.id}/edit`} ><p className='mt-4'>{mitra.title}</p></a>
        </div>
    );
}