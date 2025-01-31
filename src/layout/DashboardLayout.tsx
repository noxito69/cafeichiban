import { NavLink } from "react-router";

import '../index.css'


function DashboardLayout() {


    return (
        <>



            <nav className="bg-[#4B2E2E] fixed w-full z-20 top-0 start-0 border-b border-[#E8D8C4]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="src/assets/cafelogo.png" alt="Café Aroma Logo" className="h-20 w-20" />
                        <p></p>
                        <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#E8D8C4]">
                            Café Ichiban
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#E8D8C4] rounded-lg md:hidden hover:bg-[#6A4F4F] focus:outline-none focus:ring-2 focus:ring-[#C49A6C]">
                            <span className="sr-only">Abrir menú</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#E8D8C4] rounded-lg bg-[#6A4F4F] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#4B2E2E]">
                            <li>
                                <NavLink to="/" end className="block py-2 px-3 text-2xl text-[#E8D8C4] hover:bg-[#C49A6C] rounded-sm md:hover:bg-transparent md:hover:text-[#C49A6C]">
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" end className="block py-2 px-3 text-2xl text-[#E8D8C4] hover:bg-[#C49A6C] rounded-sm md:hover:bg-transparent md:hover:text-[#C49A6C]">
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/types" end className="block py-2 px-3 text-2xl text-[#E8D8C4] hover:bg-[#C49A6C] rounded-sm md:hover:bg-transparent md:hover:text-[#C49A6C]">
                                    Tipos de Café
                                </NavLink>
                            </li>
                          
                        </ul>
                    </div>

                </div>
            </nav>








        </>
    )
}

export default DashboardLayout