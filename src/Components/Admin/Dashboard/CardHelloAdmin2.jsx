import Button from "../Button/Button";
import AdminPic from "../../../assets/Admin/dashboard/admin-pic.svg";

export default function CardHelloAdmin2() {
    return (
        <div className="m-4 rounded-xl p-8 text-purple bg-white lg:w-[46%]  w-fit flex items-center justify-between flex-col-reverse md:flex-row shadow">
            <div className="content md:w-3/4 w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2">Hello Admin</h2>
                <p className="text-slate-500 mb-10">Welcome back, your dashboard is ready!</p>
                <Button className='border outline-none text-sm hover:bg-purple hover:text-white' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>}
                >Get Started</Button>
            </div>
            <div className="image md:w-2/4 w-2/4">
                <img src={AdminPic} alt='admin' className="md:min-w-[150px]" />
            </div>
        </div>
    );
}