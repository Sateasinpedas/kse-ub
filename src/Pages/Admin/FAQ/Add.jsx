import React from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import InputAdmin from "../../../Components/Admin/Input/InputAdmin";
import Button from "../../../Components/Admin/Button/Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { checkUser } from "../../../firebase/request";
import Swal from "sweetalert2";

export default function Add() {
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    const createFaq = async () => {
        await addDoc(collection(db, "faqs"), {
            answer,
            title
        })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success adding FAQ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser(createFaq);
    }

    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <div className="pt-14 mb-5">
                <h1 className="font-bold text-2xl">Tambah FAQ</h1>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-start flex-wrap">
                    <form className="w-full bg-white rounded-lg p-5 mb-5" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <p className="mb-3">Judul Pertanyaan</p>
                            <InputAdmin onChange={(e) => setTitle(e.target.value)} type='text' required className='w-full' placeholder='title' beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Jawaban</p>
                            <InputAdmin onChange={(e) => setAnswer(e.target.value)} type='text' required className='w-full' placeholder='description' beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <Button type='submit' className='bg-purple text-white' endIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        }>Kirim</Button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}