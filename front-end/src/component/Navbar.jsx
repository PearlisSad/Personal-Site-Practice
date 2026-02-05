import React from "react"
import Profile from "./Profile"

function Navbar(){
    const current_page = "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
    const page = "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
    return(
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-start p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a><Profile></Profile></a>
                <a href="#" className = {page} >home</a>
                <a href="#" className = {page} >features</a>
                <a href="#" className = {page} >pricing</a>
                <a href="#" className = {page} >blog</a>
            </div>
        </nav>
    )
}

export default Navbar
