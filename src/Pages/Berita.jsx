import React from "react";
import { Link } from "react-router-dom";
import CardBerita from "../Components/Berita/CardBerita";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

export default function Berita() {

    return (
        <div>
            <Nav />
            <div className="news-card pt-20">
                <div className="flex md:flex-row flex-col items-center w-[80%] justify-between mx-auto mt-20">
                    <h3 className="md:w-[35%] text-2xl font-bold md:-mt-1 mb-5 md:mb-0">Berita Terkini</h3>
                </div>
                <div className="flex items-start mx-auto justify-center mt-10 md:flex-row flex-col">
                    <NewsCard />
                    <div className="bg-purple rounded-xl text-white p-10 pb-7 w-[80%] mx-auto md:mx-0 md:w-2/5 md:ml-5 mt-5 md:mt-0 font-semibold font-sans">
                        <div className="mb-7">
                            <Link to='/berita' className="hover:text-gray transition">Penerimaan beswan KSE th. ajaran 2022/2023</Link>
                        </div>
                        <div className="mb-7">
                            <Link to='/berita' className="hover:text-gray transition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui!</Link>
                        </div>
                        <div className="mb-7">
                            <Link to='/berita' className="hover:text-gray transition">Lorem ipsum dolor sit amet consectetur.</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center w-[90%] mx-auto mt-20">
                    <CardBerita/>
                    <CardBerita/>
                    <CardBerita/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}