import { Link } from "react-router-dom";

export default function SidebarLink({className, children, href, svg}) {
    return (
        <Link className={`flex items-center p-3 rounded-xl hover:bg-purple-extralight hover:text-purple transition duration-200 w-fit my-5 min-w-[250px] ${window.location.pathname === href ? 'bg-purple-extralight text-purple' : '' } ` + className} to={href}>
            <div>
                {svg}
            </div>
            <div className="ml-2">
                <p className="">{children}</p>
            </div>
        </Link>
    );
}