import React from "react";
import Line from '../assets/footer/line.svg';
import Instagram from '../assets/footer/instagram.svg';
import Linkedin from '../assets/footer/linkedin.svg';
import Twitter from '../assets/footer/twitter.svg';
import Youtube from '../assets/footer/youtube.svg';
import { Link } from "react-router-dom";

const socialMedias = [
    {
        url: '',
        logo: Line,
        name: 'line'
    },
    {
        url: '',
        logo: Instagram,
        name: 'instagram'
    },
    {
        url: '',
        logo: Linkedin,
        name: 'linkedin'
    },
    {
        url: '',
        logo: Twitter,
        name: 'twitter'
    },
    {
        url: '',
        logo: Youtube,
        name: 'youtube'
    },
]

export default function Footer() {
    return (
        <div className="bg-purple p-10">
            <div className="w-[90%] mx-auto">
                <h3 className="text-white font-bold mb-5 text-xl">Ikuti Kami!</h3>
                <div className="bg-white p-2 flex items-center w-fit rounded-lg">
                    {
                        socialMedias.map((socialMedia, index) => {
                            return (
                                <Link to={socialMedia.url} key={index} className='mx-2'>
                                    <img src={socialMedia.logo} alt='socmed' width={`${socialMedia.name === 'line' ? '30' : '40'}`} />
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <hr className="w-[90%] mx-auto mt-10 bg-white border-white md:mb-0 mb-5" />
            <div className="flex sm:items-center sm:flex-row flex-col flex-wrap w-[90%] mx-auto mt-2 text-white">
                <a href='/bts#' className="sm:mb-0 mb-3 hover:text-orange transition">
                    <p className="mr-4">Behind The Scene</p>
                </a>
                <a href='/' className="hover:text-orange transition">
                    <p>What's on in KSE?</p>
                </a>
            </div>
        </div>
    );
}