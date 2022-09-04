import React from "react";
import CardPartner from "./CardPartner";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const partners = [
    {
        id: 1,
        name: 'Google'
    },
    {
        id: 2,
        name: 'Google'
    },
    {
        id: 3,
        name: 'Google'
    },
    {
        id: 4,
        name: 'Google'
    },
    {
        id: 5,
        name: 'Google'
    },
    {
        id: 6,
        name: 'Google'
    },
    {
        id: 7,
        name: 'Google'
    },
    {
        id: 8,
        name: 'Google'
    },
];

const marqueeVariants = {
    animate: {
      y: [0, -800],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

export default function PartnerContainer() {
    const [datas, setDatas] = React.useState([]);
    const childRef = React.useRef(null);

    React.useEffect(() => {
        let newPartners = partners;

        setDatas((prevState) => [...prevState, ...newPartners, ...newPartners, ...newPartners]);
    }, [])

    return (
        <div className="bg-orange rounded-xl p-8 flex justify-between overflow-hidden items-center h-[400px] shadow-2xl">
            <div className="content w-[55%] text-white">
                <h1 className="text-3xl font-bold mb-5">Mitra Donatur</h1>
                <p className="text-justify">Yayasan Karya Salemba Empat (KSE) yang dimulai menberikan beasiswa kepada 3 orang mahasiswa di Tahun 1995 oleh para Founder saja. Seiring dengan perkembangan masa, dari Tahun ke Tahun KSE sejak diberdirikan sebagai Yayasan di Tahun 1998, KSE mulai diberikan support oleh para donatur baik itu koorporasi dan Individual selain para pengurus dan Founder KSE.</p>
            </div>
            <div className="w-[70%] relative">
                <AnimatePresence>
                <motion.div
                variants={marqueeVariants}
                animate='animate'
                transition='transition'
                className="flex justify-end flex-wrap -mr-12">
                    {
                        datas.map((partner, index) => {
                            let condition = partner.id % 4 === 0;
                            return (
                                <div ref={childRef}>
                                    <CardPartner key={index} name={partner.name + ' ' + partner.id} className={condition ? '-mr-10' : ''} />
                                </div>
                            );
                        })
                    }
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}