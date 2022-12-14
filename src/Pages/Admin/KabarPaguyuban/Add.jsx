import React from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import InputAdmin from "../../../Components/Admin/Input/InputAdmin";
import RichTextEditor from "../../../Components/Admin/RichTextEditor/RichTextEditor";
import Button from "../../../Components/Admin/Button/Button";
import { checkUser } from "../../../firebase/request";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import Swal from "sweetalert2";

export default function Add() {
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');
    const [richContent, setRichContent] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const createNews = () => {
        setIsLoading(true);
        addDoc(collection(db, "news"), {
            title,
            link,
            description: richContent
        })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success adding Kabar Paguyuban',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsLoading(false);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.code,
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsLoading(false);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser(createNews)
    }

    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <div className="pt-14 mb-5">
                <h1 className="font-bold text-2xl">Tambah Kabar Paguyuban</h1>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-start flex-wrap">
                    <form onSubmit={handleSubmit} className="w-full bg-white rounded-lg p-5 mb-5">
                        <div className="mb-5">
                            <p className="mb-3">Judul</p>
                            <InputAdmin onChange={(e) => setTitle(e.target.value)} type='text' required className='w-full' placeholder='title' beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Link gambar</p>
                            <InputAdmin onChange={(e) => setLink(e.target.value)} type='text' required className='w-full' placeholder='link' beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Deskripsi</p>
                            <RichTextEditor setRichContent={setRichContent} defaultValue={''} />
                        </div>
                        <Button type='submit' className='bg-purple text-white' endIcon={!isLoading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        }>{
                                isLoading ? <div role="status">
                                    <svg aria-hidden="true" className="ml-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div> : 'Kirim'}</Button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}