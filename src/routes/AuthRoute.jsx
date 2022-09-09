// route for login & register

import { Navigate, Outlet } from "react-router";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebase/firebase";

export default function AuthRoute() {

    // const auth = getAuth(app);
    // console.log(auth.currentUser)
    // onAuthStateChanged(auth, () => {
    //     if (auth.currentUser) {
    //         console.log(auth.currentUser)
    //         return <Navigate to='/admin/dashboard' />
    //     }

    //     return <Outlet />
    // })

    if(localStorage.getItem('auth'))
        return <Navigate to='/admin/dashboard'/>

    return <Outlet/>

}