import React from "react";
import Button from "../Button/Button";
import FAQDropdown from "../Dropdown/FAQDropdown";
import { getDocs } from "firebase/firestore";
import { faqRef } from "../../../firebase/firebase";
import { checkUser } from "../../../firebase/request";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import SearchInput from "../SearchInput/SearchInput";

export default function CardFAQ() {
    const [faqs, setFaqs] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const getFaqData = () => {
        setIsLoading(true);
        getDocs(faqRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    setFaqs(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        checkUser(getFaqData);
    }, [])

    return (
        <div className="m-4 w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow my-2">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar FAQ</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div className="mb-5">
                    <SearchInput placeholder='Search FAQ' setSearchValue={setSearchValue}/>
                </div>
                <div className="mb-5">
                    {
                        (faqs.length === 0 && isLoading === false) && <p className="italic text-slate-700">Data FAQ tidak ditemukan</p>
                    }
                    {
                        isLoading ? <SkeletonLoader preset='faq' />
                            :
                            faqs?.filter((item) => {
                                if(searchValue === '')
                                    return item
                                else
                                    return item.title.toLowerCase().includes(searchValue.toLowerCase())
                            }).map((faq, index) => {
                                return <FAQDropdown faq={faq} key={index} />
                            })
                    }
                </div>
                <Button href='/admin/faq/add' className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Tambah FAQ</Button>
            </div>
        </div>
    );
}