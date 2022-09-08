export default function Button({children, className, onClick, type, endIcon}){
    return(
        <button type={type} className={`py-2 transition duration-300 px-5 flex items-center justify-center rounded-lg hover:opacity-80 ` + className} onClick={onClick}>
            {children}
            <div className="ml-2">
                {endIcon}
            </div>
        </button>
    );
}