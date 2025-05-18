import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X, Menu } from 'lucide-react'

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* Hamburger button for mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-40 bg-white rounded-full p-2 shadow"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <Menu size={28} />
            </button>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-opacity-80 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen w-64 bg-[#4ec6f7] z-40 flex flex-col transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:static md:translate-x-0 md:w-full md:max-w-xs md:block
                `}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 mb-2">
                        <h1 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-900">
                            Admin
                        </h1>
                        {/* Close button on mobile */}
                        <button
                        className="md:hidden p-1"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                        >
                        <X size={28} />
                        </button>
                    </div>
                <nav className="flex flex-col gap-1.5 p-2">
                    <Link
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg transition-all outline-none text-start hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900"
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    >
                    <div className="grid mr-4 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="w-5 h-5">
                        <path fillRule="evenodd"
                            d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                            clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="block mr-auto font-sans text-base font-normal leading-relaxed text-gray-900">
                        Overviews
                    </span>
                    </Link>

                    {/* Dropdown E-Commerce */}
                    <div className="relative block w-full">
                    <Link
                        type="button"
                        className="flex items-center justify-between w-full p-3 font-sans text-xl font-semibold leading-snug text-left rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900"
                        onClick={() => setOpenDropdown(!openDropdown)}
                        to="/e-commerce"
                        aria-expanded={openDropdown}
                        aria-controls="ecommerce-dropdown"
                    >
                        <div className="grid mr-4 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            className="w-5 h-5">
                            <path fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                            clipRule="evenodd"></path>
                        </svg>
                        </div>
                        <span className="block mr-auto font-sans text-base font-normal leading-relaxed text-gray-900">
                            E-Commerce
                        </span>
                        <span className="ml-4 transition-transform duration-200" style={{ transform: openDropdown ? "rotate(180deg)" : "rotate(0deg)" }}>
                        {openDropdown ? <X size={20} /> : <ChevronDown size={20} />}
                        </span>
                    </Link>
                    {openDropdown && (
                        <div
                        id="ecommerce-dropdown"
                        className="pl-8 py-2 bg-white rounded-lg shadow-lg absolute left-0 top-full mt-1 min-w-[180px] z-20"
                        >
                        <Link to="/e-commerce/orders" className="block py-2 px-2 hover:text-blue-700 text-gray-800 text-base" onClick={() => setSidebarOpen(false)}>Orders</Link>
                        <Link to="/e-commerce/products" className="block py-2 px-2 hover:text-blue-700 text-gray-800 text-base" onClick={() => setSidebarOpen(false)}>Products</Link>
                        </div>
                    )}
                    </div>

                    <Link
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg transition-all outline-none text-start hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900"
                    to="/profile"
                    onClick={() => setSidebarOpen(false)}
                    >
                    <div className="grid mr-4 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="w-5 h-5">
                        <path fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="block mr-auto font-sans text-base font-normal leading-relaxed text-gray-900">
                        Profile
                    </span>
                    </Link>

                    <Link
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg transition-all outline-none text-start hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900"
                    to="/logout"
                    onClick={() => setSidebarOpen(false)}
                    >
                    <div className="grid mr-4 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="w-5 h-5">
                        <path fillRule="evenodd"
                            d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                            clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="block mr-auto font-sans text-base font-normal leading-relaxed text-gray-900">
                        Log Out
                    </span>
                    </Link>
                </nav>
                </div>
            </aside>
        </>
  )
}

export default Sidebar