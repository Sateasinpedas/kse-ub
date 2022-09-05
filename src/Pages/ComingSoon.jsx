import UserLayout from "../Layout/User";
import ComingSoonImage from "../assets/coming-soon.svg";

export default function ComingSoon() {
    return (
        <UserLayout>
            <div className="flex lg:flex-row flex-col-reverse items-center justify-center md:w-[100%] px-32 min-h-screen">
                <h1 className="font-bold lg:text-5xl text-4xl lg:mt-0 mt-5">Coming Soon</h1>
                <img alt="coming soon" src={ComingSoonImage} className='lg:w-1/3 min-w-[250px] lg:ml-20' />
            </div>
        </UserLayout>
    );
}