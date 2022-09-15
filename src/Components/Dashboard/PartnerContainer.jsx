import React from "react";
import CardPartner from "./CardPartner";
import { AnimatePresence, motion } from "framer-motion";
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

const marqueeMediumVariants = {
    hidden: {
        y: 0
    },
    animate: {
        y: [100, -800],
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

const marqueeSmallVariants = {
    hidden: {
        x: 0
    },
    animate: {
        x: [100, -700],
        transition: {
            x: {
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

    React.useEffect(() => {
        let newPartners = partners;

        setDatas((prevState) => [...prevState, ...newPartners, ...newPartners, ...newPartners, ...newPartners]);
    }, [])

    return (
        <div className="bg-orange rounded-xl p-8 flex lg:flex-row flex-col justify-between overflow-hidden items-center lg:h-[400px] shadow-2xl">
            <div className="content lg:w-[55%] text-white">
                <h1 className="text-3xl font-bold mb-5">Mitra Donatur</h1>
                <p className="text-justify">Yayasan Karya Salemba Empat (KSE) yang dimulai menberikan beasiswa kepada 3 orang mahasiswa di Tahun 1995 oleh para Founder saja. Seiring dengan perkembangan masa, dari Tahun ke Tahun KSE sejak diberdirikan sebagai Yayasan di Tahun 1998, KSE mulai diberikan support oleh para donatur baik itu koorporasi dan Individual selain para pengurus dan Founder KSE.</p>
            </div>
            <div className="md:w-[70%] relative md:-mt-0">
                <AnimatePresence>
                    <motion.div
                        variants={marqueeMediumVariants}
                        animate='animate'
                        transition='transition'
                        className="lg:flex justify-end md:flex-wrap -mr-12 hidden">
                        {
                            datas.map((partner, index) => {
                                let condition = partner.id % 4 === 0;
                                return (
                                    <div key={index}>
                                        <CardPartner name={partner.name + ' ' + partner.id} className={condition ? 'md:-mr-10' : ''} />
                                    </div>
                                );
                            })
                        }
                    </motion.div>
                    <motion.div
                        variants={marqueeSmallVariants}
                        animate='animate'
                        transition='transition'
                        className="responsived flex flex-col md:flex-wrap -mr-12 mt-5 lg:hidden">
                        <div className="flex -ml-10">
                            {
                                datas.map((partner, index) => {
                                    let part = '';
                                    if (partner.id <= partners.length / 2) {
                                        part = <div key={index}>
                                            <CardPartner name={partner.name + ' ' + partner.id} className='' />
                                        </div>
                                    }

                                    return part
                                })
                            }
                        </div>
                        <div className="flex">
                            {
                                datas.map((partner, index) => {
                                    let part = '';

                                    if (partner.id > partners.length / 2) {
                                        part = <div key={index}>
                                            <CardPartner name={partner.name + ' ' + partner.id} className='' />
                                        </div>
                                    }

                                    return part
                                })
                            }
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}