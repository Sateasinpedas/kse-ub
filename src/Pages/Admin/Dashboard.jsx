import React from "react";
import AdminLayout from "../../Layout/AdminLayout";
import { mitras, news, testimonies } from "../../utils/Admin/dummyData";
import CardPaguyuban from "../../Components/Admin/Dashboard/CardPaguyuban";
import CardMitra from "../../Components/Admin/Dashboard/CardMitra";
import CardTestimony from "../../Components/Admin/Dashboard/CardTestimony";
import CardFAQ from "../../Components/Admin/Dashboard/CardFAQ";
import CardHelloAdmin1 from "../../Components/Admin/Dashboard/CardHelloAdmin1";

export default function AdminDashboard() {
    const [openSidebar, setOpenSidebar] = React.useState(false);

    return (
        <AdminLayout openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} >
            <div className="pt-14 mb-5">
                <h1 className="font-bold text-2xl">Dashboard</h1>
            </div>
            <div className="w-full flex justify-center flex-wrap">
                <CardHelloAdmin1/>
                <CardPaguyuban news={news} />
                <CardMitra mitras={mitras} />
                <CardTestimony testimonies={testimonies}/>
                <CardFAQ/>
            </div>
        </AdminLayout>
    );
}