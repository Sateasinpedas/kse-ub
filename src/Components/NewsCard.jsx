export default function NewsCard({name, imageUrl, newsLink}){
    return(
        <a href='/about' className="mx-auto md:mx-0 w-[80%] md:w-2/5 rounded-xl shadow-xl bg-white h-[250px] relative bg-cover bg-no-repeat " style={{background: 'linear-gradient(0deg, #000000 -7.73%, rgba(0, 0, 0, 0) 50%), url(https://images.pling.com/img/00/00/62/84/47/1737508/beautiful-scenery-tree-sea-sunset-hd-wallpaper-3842-1920x1080.jpg), no-repeat', backgroundSize: "cover"}}>
            <p className="text-white absolute bottom-5 left-5 font-semibold font-sans">Kuda gila sedang mengamuk di tepi jalan</p>
        </a>
    );
}