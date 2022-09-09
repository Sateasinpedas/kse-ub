import React from "react";
import AdminNavbar from "../Components/Admin/Navbar/AdminNavbar";
import Sidebar from "../Components/Admin/Sidebar/Sidebar";

export default function AdminLayout({children, openSidebar, setOpenSidebar}){

    return(
        <div className="flex box-border">
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <div className="hidden md:block md:ml-32 ml-0 bg-purple-extralight w-full min-h-screen p-10" style={{marginLeft: '280px'}}>
                <AdminNavbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                {children}
            </div>
            <div className="md:hidden md:ml-32 ml-0 bg-purple-extralight w-full min-h-screen p-10">
                <AdminNavbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                {children}
            </div>
        </div>
    );
}