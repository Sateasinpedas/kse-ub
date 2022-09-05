import React from "react";
import UserLayout from "../Layout/User";
import InstagramLogo from "../assets/icons8-instagram.svg";
import Line from '../assets/line.svg';
import TwitterLogo from '../assets/icons8-twitter.svg';

export default function Kontak(){
    return(
        <div className="font-sans">
            <UserLayout>
                <div className="md:w-[90%] w-[98%] mx-auto min-h-screen pt-40">
                    <h1 className="font-bold text-3xl mb-20 text-center">Kontak Kami</h1>
                    <div className="flex lg:flex-row flex-col items-start lg:justify-center">
                        <div className="lg:w-[40%] w-full bg-orange rounded-xl p-5 lg:px-20 min-h-[250px] lg:mb-0 mb-10 shadow-xl">
                            <div className="flex lg:flex-row flex-col items-center mb-5">
                                <img alt="" src={InstagramLogo} className='lg:-ml-2 w-[50px] lg:mb-0 mb-2'/>
                                <p className="text-white lg:font-bold text-xl lg:ml-2">kse_ub</p>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center mb-5">
                                <img alt="" src={Line} className='w-[40px] lg:mb-0 mb-2'/>
                                <p className="text-white lg:font-bold text-xl lg:ml-2">@KKW2890L   </p>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center">
                                <img alt="" src={TwitterLogo} className='w-[50px] -ml-2 lg:mb-0 mb-2'/>
                                <p className="text-white lg:font-bold text-xl lg:ml-2">@ub_kse</p>
                            </div>
                        </div>
                        <div className="lg:w-[40%] w-full bg-orange rounded-xl p-5 lg:px-20 lg:ml-10 min-h-[250px] shadow-xl">
                            <div className="flex items-center mb-5 -ml-2">
                                <p className="text-black font-bold text-2xl ml-3">Contact Person</p>
                            </div>
                            <div className="flex items-center mb-5">
                                <p className="text-white text-xl ml-2 underline">Departemen Kominfo </p>
                            </div>
                            <div className="flex items-center mb-5">
                                <p className="text-white text-xl ml-2">Rafli Ardiansyah</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white text-xl ml-2">08123456890</p>
                            </div>    
                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    );
}