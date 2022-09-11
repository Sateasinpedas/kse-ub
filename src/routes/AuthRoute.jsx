// route for login & register
import { Navigate, Outlet } from "react-router";

export default function AuthRoute() {
    if(localStorage.getItem('auth'))
        return <Navigate to='/admin/dashboard'/>

    return <Outlet/>
}