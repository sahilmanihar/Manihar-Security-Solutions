import { FaVideo, FaUsers, FaHeadset } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="pt-0 pb-20 px-6 md:px-20 bg-black text-white text-center"
        >
            {/* TITLE */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        About Us
                    </span>
                    <span className="block w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full animate-pulse"></span>
                </h2>

                <p className="text-lg max-w-3xl mx-auto mt-6 text-white leading-relaxed">
                    We are a trusted security solutions provider in Mumbai with years of
                    expertise in delivering top-quality installations for Homes, Offices,
                    Shops, Societies, and Commercial Spaces. Our mission is to provide
                    <span className="font-semibold text-blue-600"> reliable </span>,
                    <span className="font-semibold text-red-600"> advanced </span>, and
                    <span className="font-semibold text-blue-600"> intelligent </span> surveillance solutions.
                </p>
            </div>

            {/* STATS / CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14">

                {/* CARD 1 */}
                <div className="p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all bg-[#f8f9fa] text-center border border-gray-200 hover:border-blue-500">
                    <FaVideo className="text-5xl text-blue-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                    <p className="mt-2 text-gray-700 text-lg">CCTV Installations</p>
                </div>

                {/* CARD 2 */}
                <div className="p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all bg-[#f8f9fa] text-center border border-gray-200 hover:border-blue-500">
                    <FaUsers className="text-5xl text-red-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-red-600">500+</h3>
                    <p className="mt-2 text-gray-700 text-lg">Happy Customers</p>
                </div>

                {/* CARD 3 */}
                <div className="p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all bg-[#f8f9fa] text-center border border-gray-200 hover:border-blue-500">
                    <FaHeadset className="text-5xl text-blue-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-blue-600">200+</h3>
                    <p className="mt-2 text-gray-700 text-lg">Live Support Systems</p>
                </div>
            </div>
        </section>
    );
}
