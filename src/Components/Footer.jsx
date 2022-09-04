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

export default function Footer(){
    return(
        <div className="bg-purple mt-40 p-10">
            <div className="w-[90%] mx-auto">
                <h3 className="text-white font-bold mb-5 text-xl">Ikuti Kami!</h3>
                <div className="bg-white p-2 flex items-center w-fit rounded-lg">
                    {
                        socialMedias.map((socialMedia, index) => {
                            return(
                                <Link to={socialMedia.url} key={index} className='mx-2'>
                                    <img src={socialMedia.logo} alt='socmed' width={`${socialMedia.name === 'line' ? '30' : '40'}`}/>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <hr className="w-[90%] mx-auto mt-10 bg-white border-white"/>
            <div className="flex items-center w-[90%] mx-auto mt-2 text-white">
                <p>Behind The Scene</p>
                <p className="ml-4">What's on in KSE?</p>
            </div>
        </div>
    );
}