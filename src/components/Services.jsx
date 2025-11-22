import Cctv from "../assets/images/Cctv.jpg";
import cctv from "../assets/images/cctv2.png";
import Biometric from "../assets/images/Biometric.jpg";
import Doorbell from "../assets/images/Doorbell2.png";
import SimpleDoorbell from "../assets/images/Doorbell.jpg"
import Monitor from "../assets/images/Monitor.jpg";

const services = [
    { title: "CCTV Installation-1", img: Cctv },
    { title: "CCTV Installation-2", img: cctv },
    { title: "Video Door Bell", img: Doorbell },
    { title: "Biometric", img: Biometric },
    { title: "Simple Door Bell", img: SimpleDoorbell },
    { title: "Monitor Setup With Camera", img: Monitor },
];

export default function Services() {
    return (
        <section id="services" className="py-20 px-6 md:px-20 bg-black text-white">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-14 "><span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Our Services</span></h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((s) => (
                    <div
                        key={s.title}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all cursor-pointer"
                    >
                        <img src={s.img} alt="" className="h-56 w-full object-cover" />
                        <div className="p-5">
                            <h3 className="text-2xl text-blue-500 font-semibold mb-2">{s.title}</h3>
                            <p className="text-gray-600">
                                High-quality {s.title.toLowerCase()} service with professional support.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
