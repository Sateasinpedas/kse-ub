// route after login and register

import { Navigate, Outlet } from "react-router";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebase/firebase";

export default function PrivateRoute() {

    // const auth = getAuth(app);
    
    // onAuthStateChanged(auth, () => {
    //     if (auth.currentUser) {
    //         console.log(auth.currentUser)
    //         return <Outlet />
    //     }

    //     return <Navigate to='/admin/login' />
    // })

    if(localStorage.getItem('auth'))
        return <Outlet/>

    return <Navigate to='/admin/login'/>
}