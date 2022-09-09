import React from "react";
import AdminLayout from "../../../Layout/AdminLayout";
import InputAdmin from "../../../Components/Admin/Input/InputAdmin";
import RichTextEditor from "../../../Components/Admin/RichTextEditor/RichTextEditor";
import Button from "../../../Components/Admin/Button/Button";

export default function Edit() {
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [richContent, setRichContent] = React.useState('');

    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <div className="pt-14 mb-5">
                <h1 className="font-bold text-2xl">Edit Kabar Paguyuban</h1>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-start flex-wrap">
                    <form className="w-full">
                        <div className="mb-5">
                            <p className="mb-3">Judul</p>
                            <InputAdmin type='text' required className='w-full' placeholder='title' beginningIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            } />
                        </div>
                        <div className="mb-5">
                            <p className="mb-3">Deskripsi</p>
                            <RichTextEditor setRichContent={setRichContent} defaultValue={''} />
                        </div>
                    </form>
                    <Button className='bg-purple text-white' endIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    }>Kirim</Button>
                </div>
            </div>
        </AdminLayout>
    );
}