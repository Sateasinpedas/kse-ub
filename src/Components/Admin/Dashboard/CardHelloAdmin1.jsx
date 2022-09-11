import Button from "../Button/Button";
import AdminPic from "../../../assets/Admin/dashboard/admin-pic.svg";

export default function CardHelloAdmin1() {
    return (
        <div className="m-4 rounded-xl p-8 text-white bg-purple-light w-full flex items-center justify-between flex-col-reverse md:flex-row shadow">
            <div className="content md:w-3/4 w-full md:mt-0 mt-5">
                <h2 className="font-bold text-2xl mb-2">Hello Admin</h2>
                <p className="text-slate-300 mb-10">Welcome back, your dashboard is ready!</p>
                <Button href='#kabar-paguyuban' className='border border-white outline-none text-sm hover:bg-white hover:text-slate-700' endIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                  }
                >Get Started</Button>
            </div>
            <div className="image md:w-2/4 w-2/4">
                <img src={AdminPic} alt='admin' className="md:min-w-[150px]" />
            </div>
        </div>
    );
}