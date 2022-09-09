import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function UserLayout({ children }) {
    return (
        <div>
            <Nav />
                <div className="md:px-[100px] px-[50px]">
                    {children}
                </div>
            <Footer />
        </div>
    );
}