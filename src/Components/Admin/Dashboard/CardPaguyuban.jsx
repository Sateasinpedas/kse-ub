import { getDocs } from "firebase/firestore";
import React from "react";
import { kabarPaguyubanRef } from "../../../firebase/firebase";
import { checkUser } from "../../../firebase/request";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function CardPaguyuban() {
    const [news, setNews] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const getPaguyubanData = () => {
        setIsLoading(true);
        getDocs(kabarPaguyubanRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    setNews(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        checkUser(getPaguyubanData)         
    }, [])

    return (
        <div id="kabar-paguyuban" className="scroll-mt-20 m-4 lg:w-[46%] w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar Kabar Paguyuban</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div className="my-5">
                    <SearchInput placeholder='Search Kabar Paguyuban' setSearchValue={setSearchValue} />
                </div>
                <div>
                    {
                        (news.length === 0 && isLoading === false ) && <p className="my-3 italic">Kabar paguyuban not found</p>
                    }
                    {
                        isLoading ? <SkeletonLoader preset='faq' /> :
                        news.filter((berita) => {
                            if (searchValue === '')
                                return berita
                            else
                                return berita.title.toLowerCase().includes(searchValue.toLowerCase())
                        }).map((item, index) => {
                            return (
                                <div className="daftar-berita " key={index}>
                                    <a onClick={() => localStorage.setItem('news', JSON.stringify(item))} href={`/admin/kabar-paguyuban/${item.title.replace("?", "")}/edit`}>
                                        <h4 className="text-slate-600 font-semibold mb-2">{item.title}</h4>
                                    </a>
                                    <p className="text-slate-500 text-sm mb-5">{item.description.substring(0, 50)}...</p>
                                </div>
                            );
                        })
                    }
                </div>
                <Button href={'/admin/kabar-paguyuban/add'} className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Visit</Button>
            </div>
        </div>
    );
}