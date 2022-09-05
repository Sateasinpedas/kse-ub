import React from "react";

export default function ActorCard({name, role, prodi}){
    return(
        <div className="hover:shadow-xl transition duration-300 bg-orange md:mx-auto lg:w-[700px] rounded-xl p-10 flex items-center sm:flex-row flex-col my-10">
            <img alt="" className="w-[150px] rounded-xl sm:mb-0 mb-10" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"/>
            <div className="text-white sm:ml-10 sm:text-left text-center">
                <p className="mb-10 md:text-3xl text-xl font-bold md:font-normal">{name}</p>
                <p className="mb-2 md:text-lg">{role}</p>
                <p className="md:text-lg">{prodi}</p>
            </div>
        </div>
    );
}