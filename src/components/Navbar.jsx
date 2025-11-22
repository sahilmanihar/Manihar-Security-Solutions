import { useState } from "react";
import logo from "../assets/logo-sahil.png";
import { MdCall } from "react-icons/md";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Smooth scroll function
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false); // close mobile menu after click
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[100px] w-full object-contain"
                    />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
                    <li
                        className="text-white hover:text-blue-500 cursor-pointer transition-all"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </li>

                    <li
                        className="text-white hover:text-blue-500 cursor-pointer transition-all"
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </li>

                    <li
                        className="text-white hover:text-blue-500 cursor-pointer transition-all"
                        onClick={() => scrollToSection("services")}
                    >
                        Services
                    </li>

                    {/* CONTACT BUTTON */}
                    <a
                        href="tel:+918879836xxx"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg"
                    >
                        <MdCall className="text-xl" /> Contact Us
                    </a>
                </ul>

                {/* MOBILE HAMBURGER ICON */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black text-white shadow-lg border-t border-gray-700">
                    <ul className="flex flex-col text-lg font-medium py-4 px-6 gap-4">
                        <li
                            className="hover:text-blue-500 cursor-pointer transition"
                            onClick={() => scrollToSection("hero")}
                        >
                            Home
                        </li>

                        <li
                            className="hover:text-blue-500 cursor-pointer transition"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </li>

                        <li
                            className="hover:text-blue-500 cursor-pointer transition"
                            onClick={() => scrollToSection("services")}
                        >
                            Services
                        </li>

                        {/* MOBILE CONTACT BUTTON */}
                        <a
                            href="tel:+918879836xxx"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700 transition-all shadow-lg"
                        >
                            <MdCall className="text-xl" /> Contact Us
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
}
