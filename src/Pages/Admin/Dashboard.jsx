import React from "react";

export default function AdminDashboard(){

    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.reload();
    }

    return(
        <div>
            This is admin <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}