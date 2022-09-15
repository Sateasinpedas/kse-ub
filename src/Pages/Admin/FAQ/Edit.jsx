import React from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import InputAdmin from "../../../Components/Admin/Input/InputAdmin";
import Button from "../../../Components/Admin/Button/Button";
import { faqRef } from "../../../firebase/firebase";
import { checkUser, editItem, getDatas } from "../../../firebase/request";
import Swal from "sweetalert2";
import { deleteItem } from "../../../utils/ConfirmationDialog";
import { useParams } from "react-router";
import LoadingIcon from "../../../assets/LoadingIcon";

export default function Edit() {
    const { id } = useParams();
    const [faq, setFaq] = React.useState({});
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [title, setTitle] = React.useState(faq.title);
    const [answer, setAnswer] = React.useState(faq.answer);
    const [datas, setDatas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = React.useState(false);

    React.useEffect(() => {
        datas.forEach((data) => {
            if(data.id === id)
                setFaq(data);
        })
    }, [datas, id])

    React.useEffect(() => {
        getNews();
    }, [])

    const getNews = () => {
        setIsLoading(false);
        getDatas(setIsLoading, setDatas, faqRef);
    }

    const deleteFaq = async () => {
        setIsLoadingDelete(true);
        Swal.fire({
            title: 'Do you want to Delete the item?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(setIsLoadingDelete, "faqs", faq.id);
            } else if (result.isDenied) {
                setIsLoadingDelete(false);
                Swal.fire('Item not deleted', '', 'info')
            }
        })
    }

    const editFaq = async () => {
        let items = {
            title: title || faq.title,
            answer: answer || faq.answwer,
        }
        editItem(setIsLoading, id, items);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser(editFaq);
    }

    const handleDelete = () => {
        checkUser(deleteFaq);
    }

    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <div>
                <div className="pt-14 mb-5">
                    <h1 className="font-bold text-2xl">Edit FAQ</h1>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-start flex-wrap">
                    <form className="w-full bg-white rounded-lg p-5 mb-5" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <p className="mb-3">Judul Pertanyaan</p>
                            <InputAdmin defaultValue={faq.title} onChange={(e) => setTitle(e.target.value)} type='text' required className='w-full' placeholder={faq.title === undefined ? 'memuat...' : 'title' } beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Jawaban</p>
                            <InputAdmin defaultValue={faq.answer} onChange={(e) => setAnswer(e.target.value)} type='text' required className='w-full' placeholder={faq.answer === undefined ? 'memuat...' : 'answer' } beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <Button type='submit' className='bg-purple text-white' endIcon={!isLoading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        }>
                            {
                                isLoading ? <LoadingIcon/> : 'Kirim'
                            }
                        </Button>
                    </form>
                    <div className="mt-5 flex items-start flex-col">
                        <Button onClick={handleDelete} className='bg-purple text-white' endIcon={!isLoadingDelete && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        }>{isLoadingDelete ? <LoadingIcon/> : 'Delete'}</Button>
                        <p className="text-red-500 mt-2">Warning!! deleted data cannot be recovered </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}