import React from "react";

export default function CardBerita(){
    const [isHover, setIsHover] = React.useState(false);

    return(
        <div className="w-[25%] m-5 min-w-[300px] overflow-hidden rounded-lg">
            <div className="relative rounded-lg">
                <img className={`${ isHover ? 'scale-110' : 'hover:scale-110' } transition  card-image rounded-lg mb-5`} src="https://images.pling.com/img/00/00/62/84/47/1737508/beautiful-scenery-tree-sea-sunset-hd-wallpaper-3842-1920x1080.jpg" alt="news"/>
                <div onMouseEnter={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="bg absolute w-full h-[150px] " style={{background: 'linear-gradient(0deg, #000000 -7.73%, rgba(0, 0, 0, 0) 50%)'}}></div>
            </div>
            <div className="card-content">
                <h3 className="uppercase font-bold text-xl mb-3">
                    lorem ipsum
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique. Maiores nisi accusantium sit minus repellendus quidem vero! Ullam, qui!
                </p>
            </div>
        </div>
    );
}