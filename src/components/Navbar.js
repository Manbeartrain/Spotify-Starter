/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function Navbar() {

    const { isAuthenticated, authenticate, logout, user } = useMoralis()

    return (
        <nav className="bg-gray-800 bg-opacity-60 z-[300] w-full border-gray-200 fixed top-0  sm:px-4 py-2 rounded dark:bg-gray-800 flex justify-center items-center">
            <div className="w-full flex flex-wrap justify-between items-center ">
                <a href="#" className="flex items-center flex-[.25] justify-center">
                    <span className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">Lucifrends</span>
                </a>
                <div className="flex flex-[.25] md:order-2 justify-end">
                    {isAuthenticated ?
                        <div className="flex justify-center items-center ">
                            <p className=" hidden md:flex mr-8 text-gray-400 font-extralight">{`${(user?.attributes?.ethAddress).substring(0, 16)}...`}</p>
                            <button onClick={() => logout()} type="button" className="text-white  bg-rose-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  ">Logout</button>
                        </div> :
                        <button onClick={() => authenticate()} type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ">Login</button>}
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden  items-center md:flex  md:order-1 flex-[1] justify-center" id="mobile-menu-4">
                    <ul className="flex  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="w-[12vh] flex justify-center items-center">
                            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li className="w-[12vh]  flex justify-center items-center">
                            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Roadmap</a>
                        </li>
                        <li className="w-[12vh] flex justify-center items-center">
                            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Giveaways</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
