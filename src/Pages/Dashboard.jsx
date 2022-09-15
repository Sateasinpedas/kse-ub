import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom"
import JumbotronBg from '../assets/jumbotron-bg.svg';
import NewsCard from "../Components/NewsCard";
import PartnerContainer from "../Components/Dashboard/PartnerContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Feedback from "../Components/Dashboard/Feedback";
import Footer from "../Components/Footer";
import { getDocs } from "firebase/firestore";
import { kabarPaguyubanRef } from "../firebase/firebase";

const testimonies = [
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
    {
        nama: 'Rafli Ardiansyah',
        prodi: "Teknologi Informasi '21",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores beatae minima blanditiis ex magni at. Voluptates nihil culpa molestiae officia ullam autem nostrum. Eius possimus quas provident consequatur earum?'
    },
]

export default function Welcome() {
    const [swipeTo, setSwipeTo] = React.useState();
    const [news, setNews] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getDocs(kabarPaguyubanRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    setNews(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <Nav />
            <div className="jumbotron bg-purple md:px-[100px] px-[50px] font-sans text-white p-32 md:pt-40 relative overflow-hidden min-h-screen">
                <div className="mt-[85px]">
                    <h1 className="sm:text-5xl text-3xl font-bold relative z-20">Karya Salemba Empat</h1>
                    <h2 className="sm:text-3xl text-xl  mt-3 relative z-20">Universitas Brawijaya</h2>
                    <h2 className="sm:text-3xl text-xl  mb-5 relative z-20">2022 - 2023</h2>
                    <a href='#berita-terkini'>
                        <button className="bg-orange shadow-lg p-2 rounded-lg font-medium px-5 py-2 text-xl  relative z-20 hover:bg-[#ff8519] text-white hover:boder-white transition hover:scale-105">Berita terkini</button>
                    </a>
                </div>
                <img src={JumbotronBg} alt='background' className="absolute left-0 top-32 bottom-0 right-0 w-full" />
            </div>
            <div className="news-card">
                <div className="flex md:flex-row flex-col items-center md:w-[75%] w-[80%] justify-between mx-auto mt-20">
                    <h3 className="md:w-[35%] text-2xl font-bold md:-mt-1 mb-5 md:mb-0">Berita Terkini</h3>
                    <hr className="border-[1.6px] bg-black border-black rounded w-[100%] md:-ml-10 mb-5 md:mb-0" />
                    <Link to='/berita' className="md:w-[30%] ">
                        <button className="bg-black rounded-lg px-5 py-1 text-white text-sm flex items-center justify-center font-sans">
                            Lihat semua
                        </button>
                    </Link>
                </div>
                <div className="flex items-start mx-auto justify-center mt-10 md:flex-row flex-col" id="berita-terkini">
                    <NewsCard />
                    <div className="bg-purple rounded-xl text-white p-10 pb-7 w-[80%] mx-auto md:mx-0 md:w-2/5 md:ml-5 mt-5 md:mt-0 font-semibold font-sans min-h-[250px]">
                        {
                            news.map((item, index) => {
                                return (
                                    <div className="mb-7" key={index}>
                                        <Link to={`/berita/${item.id}`} className="hover:text-gray transition">{item.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex w-[80%] mx-auto mt-32 items-start md:flex-row flex-col">
                    <div className="tentang md:w-[50%]">
                        <h1 className="font-bold text-3xl md:mb-2 mb-5">Tentang</h1>
                        <p className="text-justify mb-5 md:mb-0">Berkat dukungan semua pihak, Beasiswa KSE telah berkembang dengan memberikan dukungan kepada lebih dari 20.000 mahasiswa dari 34 Perguruan Tinggi Negeri. KSE adalah jembatan bagi berbagai perusahaan dan individu dalam menyalurkan sumbangan mereka kepada kandidat dan program-program peningkatan soft skill yang tepat. Selain itu, KSE juga mendorong dan turut mempersiapkan penerima beasiswa menjadi lulusan yang memiliki integritas, berwawasan kebangsaan, cinta pada tanah air nusa dan bangsa melalui berbagai program-program pembinaan.</p>
                    </div>
                    <div className="md:w-[50%] md:ml-20 text-justify">
                        <div>
                            <h5 className="font-bold text-xl my-2">Visi</h5>
                            <p>Mewujudkan Paguyuban KSE UB sebagai inisatior mahasiswa dalam arah gerak kolaborasi dan slaing  bersinergi untuk menciptakan inspirasi dalam memberikan nilai daya bagi KSE, Brawijaya dan Indonesia.</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-xl my-2 mt-10">Misi</h5>
                            <ol className="list-decimal md:ml-10 ml-3">
                                <li >KSE UB sebagai inspirator dalam kolaborasi dan bersinergi baik secara internal maupun secara eksternal.</li>
                                <li>Responsif terhadap isu masalah dan hadir sebagai garda penyelesaian.</li>
                                <li>Berperan aktif bersama demi menciptakan sumber daya yang optimal.</li>
                                <li>Hadir sebagai wadah inspirasi, inklusif, inovatif dan solutif,</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] mx-auto mt-32">
                    <PartnerContainer />
                </div>
                <div className="md:w-[80%] w-[90%] mx-auto mt-32 flex md:flex-row flex-col sm:items-start items-center">
                    <div className="tentang md:w-[40%] md:ml-0 sm:text-left sm:ml-10 text-center">
                        <h1 className="font-bold sm:text-3xl text-2xl mb-2">Apa Kata Para <br className="md:block hidden" /> Beswan KSE</h1>
                        <p className="md:mt-5 mt-2">Testimoni Beswan KSE UB</p>
                    </div>
                    <div className="tentang md:w-[60%] w-[90%] mx-auto md:mt-0 mt-10 mb-40">
                        <Swiper className="mySwiper"
                            slidesPerView={1}
                            onInit={(e) => {
                                setSwipeTo(e);
                            }}
                        >
                            {
                                testimonies.map((testimony, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Feedback length={testimonies.length} testimony={testimony} swipeTo={swipeTo} id={index + 1} />
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}