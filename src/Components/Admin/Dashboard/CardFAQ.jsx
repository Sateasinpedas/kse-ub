import React from "react";
import Button from "../Button/Button";
import FAQDropdown from "../Dropdown/FAQDropdown";
import { getDocs } from "firebase/firestore";
import { faqRef } from "../../../firebase/firebase";
import { checkUser } from "../../../firebase/request";

export default function CardFAQ(){
    const [faqs, setFaqs] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const getFaqData = () => {
        setIsLoading(true);
        getDocs(faqRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                setFaqs(prevState => [...prevState, {...doc.data(), id: doc.id}])
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

    return(
        <div className="m-4 w-full rounded-xl p-8 bg-white flex items-start justify-between flex-col-reverse md:flex-row shadow my-2">
            <div className="content w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2 text-slate-600">Daftar FAQ</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <div className="mb-5">
                    {
                        (faqs.length === 0 && isLoading === false) && <p className="italic text-slate-700">Data FAQ tidak ditemukan</p>
                    }
                    {
                        isLoading ? <div role="status">
                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> 
                    :
                    faqs?.map((faq, index) => {
                        return <FAQDropdown faq={faq} key={index}/>
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