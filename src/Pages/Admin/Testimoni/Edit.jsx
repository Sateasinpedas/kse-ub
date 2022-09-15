import React from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import InputAdmin from "../../../Components/Admin/Input/InputAdmin";
import Button from "../../../Components/Admin/Button/Button";
import { testimoniRef } from "../../../firebase/firebase";
import Swal from "sweetalert2";
import { checkUser, editItem, getDatas } from "../../../firebase/request";
import { deleteItem } from "../../../utils/ConfirmationDialog";
import { useParams } from "react-router";

export default function Edit() {
    const { id } = useParams();
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [nama, setNama] = React.useState(JSON.parse(localStorage.getItem('testimoni')).nama);
    const [prodi, setProdi] = React.useState(JSON.parse(localStorage.getItem('testimoni')).prodi);
    const [imageLink, setImageLink] = React.useState(JSON.parse(localStorage.getItem('testimoni')).image_link);
    const [deskripsi, setDeskripsi] = React.useState(JSON.parse(localStorage.getItem('testimoni')).description);
    const [testimoni, setTestimoni] = React.useState({});
    const [isLoadingDelete, setIsLoadingDelete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState('');
    const [datas, setDatas] = React.useState([]);

    React.useEffect(() => {
        datas.forEach((data) => {
            if(data.id === id)
                setTestimoni(data);
        })
    }, [datas, id])

    React.useEffect(() => {
        getNews();
    }, []);

    const getNews = () => {
        setIsLoading(false);
        getDatas(setIsLoading, setDatas, testimoniRef);
    }

    const deleteTestimoni = async () => {
        setIsLoadingDelete(true);
        Swal.fire({
            title: 'Do you want to Delete the item?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(setIsLoadingDelete, "testimonies", testimoni.id);
            } else if (result.isDenied) {
                setIsLoadingDelete(false);
                Swal.fire('Item not deleted', '', 'info')
            }
        })
    }

    const editTestimoni = async () => {
        let items = {
            nama: nama || testimoni.nama,
            prodi: prodi || testimoni.prodi,
            image_link: imageLink || testimoni.image_link,
            description: deskripsi || testimoni.description,
            id: id
        }
        editItem(setIsLoading, items, "testimonies", "success edit testimonies");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser(editTestimoni);
    }

    const handleDelete = () => {
        checkUser(deleteTestimoni);
    }
    
    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <div className="pt-14 mb-5">
                <h1 className="font-bold text-2xl">Edit Testimoni</h1>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-start flex-wrap">
                    <form onSubmit={handleSubmit} className="w-full bg-white rounded-lg p-5 mb-5">
                        <div className="mb-5">
                            <p className="mb-3">Nama</p>
                            <InputAdmin defaultValue={testimoni.nama} onChange={(e) => setNama(e.target.value)} type='text' required className='w-full' placeholder={testimoni.nama === undefined ? 'memuat...' : 'title'} beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Prodi</p>
                            <InputAdmin defaultValue={testimoni.prodi} onChange={(e) => setProdi(e.target.value)} type='text' required className='w-full'  placeholder={testimoni.prodi === undefined ? 'memuat...' : 'prodi'} beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Link gambar</p>
                            <InputAdmin  defaultValue={testimoni.image_link} onChange={(e) => setImageLink(e.target.value)} type='text' required className='w-full'  placeholder={testimoni.image_link === undefined ? 'memuat...' : 'image link'} beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Deskripsi</p>
                            <InputAdmin defaultValue={testimoni.description} onChange={(e) => setDeskripsi(e.target.value)} type='text' required className='w-full'  placeholder={testimoni.description === undefined ? 'memuat...' : 'Deskripsi'} beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                            } />
                        </div>
                        <Button type='submit' className='bg-purple text-white' endIcon={!isLoading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        }>{isLoading ? <div role="status">
                            <svg aria-hidden="true" className="ml-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> : 'Kirim'}</Button>
                    </form>
                    <div className="mt-5 flex items-start flex-col">
                        <Button onClick={handleDelete} className='bg-purple text-white' endIcon={!isLoadingDelete && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        }>{isLoadingDelete ?
                            <div role="status">
                                <svg aria-hidden="true" className="ml-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            : 'Delete'}</Button>
                        <p className="text-red-500 mt-2">Warning!! deleted data cannot be recovered </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}