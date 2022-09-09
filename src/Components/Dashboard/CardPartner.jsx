export default function CardPartner({name, className}){
    return(
        <div className={`rounded-lg p-2 w-[230px] h-[100px] m-2 relative shadow-xl hover:-translate-y-1 transition duration-300 ${className}`} style={{background: 'linear-gradient(0deg, #000000 -7.73%, rgba(0, 0, 0, 0) 50%), url(https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)', backgroundSize: "cover"}}>
            <p className="absolute bottom-2 left-2 text-white font-medium">{name}</p>
        </div>
    );
}