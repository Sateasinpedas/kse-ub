import React from "react";

export default function NewsCard({name, imageUrl, newsLink}){
    const [isHover, setIsHover] = React.useState(false);

    return(
        <a href='/about' className="mx-auto md:mx-0 w-[80%] md:w-2/5 rounded-xl shadow-xl bg-white h-[250px] relative bg-cover bg-no-repeat overflow-hidden" style={{background: 'linear-gradient(0deg, #000000 -7.73%, rgba(0, 0, 0, 0) 50%), no-repeat', backgroundSize: "cover"}}>
            <img className={`${isHover ? 'scale-110' : 'hover:scale-110'} transition duration-300`} src='https://images.pling.com/img/00/00/62/84/47/1737508/beautiful-scenery-tree-sea-sunset-hd-wallpaper-3842-1920x1080.jpg' alt='bg'/>
            <div onMouseEnter={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="bg absolute bottom-0 w-full h-[150px] " style={{background: 'linear-gradient(0deg, #000000 -7.73%, rgba(0, 0, 0, 0) 50%)', backgroundSize: "cover"}}></div>
            <p className="text-white absolute bottom-5 left-5 font-semibold font-sans">Kuda gila sedang mengamuk di tepi jalan</p>
        </a>
    );
}