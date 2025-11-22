import { useState } from "react";
import { motion } from "framer-motion";
import { MdCall } from "react-icons/md";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // ⭐ Web3Forms Integration
        const formData = new FormData(e.target);
        formData.append("access_key","1d86dbc2-e7b4-4174-aab9-48c0edaa9f59");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (data.success) {
            setIsSubmitted(true);
            e.target.reset();
        } else {
            alert("❌ Error: " + data.message);
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-black text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="inline-flex items-center gap-2 text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        <MdCall className="text-4xl text-white" />
                        Get in Touch With Us
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        Secure your home & business with our premium CCTV installation,
                        video door bell systems, biometric setup and much more.
                        We promise quick support and the best service in Mumbai.
                    </p>

                    <div className="mt-6 text-lg">
                        📍 <span className="text-gray-200">Mankhurd West, Mumbai - 400043</span><br />
                        📞 <span className="font-semibold text-red-400">+91 8879836358</span>
                    </div>
                </div>

                {/* RIGHT SIDE CONTACT FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-500 text-black p-6 rounded-2xl shadow-xl space-y-5 max-w-lg mx-auto w-full"
                >
                    {/* Web3Forms Key */}
                    {/* <input
                        type="hidden"
                        name="access_key"
                        value="1d86dbc2-e7b4-4174-aab9-48c0edaa9f59"
                    /> */}

                    <h3 className="text-xl font-bold text-center text-white">Contact Form</h3>

                    <div>
                        <label className="font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            required
                            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Select Service</label>
                        <select
                            name="service"
                            required
                            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select Service --</option>
                            <option>CCTV Installation</option>
                            <option>Video Door Phone</option>
                            <option>Biometric System</option>
                            <option>Doorbell System</option>
                            <option>Camera + Monitor Setup</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* SUCCESS POPUP */}
            {isSubmitted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                >
                    <div className="bg-white text-black p-8 rounded-2xl shadow-2xl text-center max-w-sm">
                        <h3 className="text-2xl font-bold mb-3">🎉 Thank You!</h3>
                        <p>Your form has been submitted successfully.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
