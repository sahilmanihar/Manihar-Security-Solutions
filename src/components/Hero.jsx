import React from "react";
import camera1 from "../assets/images/camera.png";
import { MdCall } from "react-icons/md";


export default function Hero() {
    return (
        <section id="home" className="flex justify-center items-center w-full min-h-[100vh] mt-0  md:mt-6 bg-black text-white py-10 md:py-0">
            <div className="max-w-7xl mx-auto px-6 
                grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center">

                {/* LEFT SIDE — TEXT */}
                <div className="pt-40 md:pt-0 space-y-10 md:space-y-6 text-left md:text-left">
                    <h1 className="text-[22px] sm:text-4xl md:text-6xl font-extrabold leading-tight">
                        Advance CCTV Camera<br/><span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Security Solutions</span>
                        <br /> For Home & Business
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        We provide professional CCTV installation, smart surveillance systems, CCTV AMC, Biometric System Installation, Door Bell
                        Camera Installation, Online IT Support
                        and complete security solutions with high-quality service in Mumbai.
                        Trusted by 500+ customers.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 sm:px-10 py-3 rounded-lg
             text-lg font-semibold shadow-lg transition-all"
                    >
                        <MdCall className="text-xl" />
                        Contact Us
                    </a>

                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={camera1}
                        alt="CCTV"
                        className="rounded-2xl shadow-2xl w-full 
                        max-w-xs sm:max-w-sm md:max-w-lg object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
