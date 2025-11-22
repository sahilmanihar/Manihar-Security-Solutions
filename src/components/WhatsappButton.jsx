import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/918879836358?text=Hello%20I%20want%20a%20CCTV%20service%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white 
                 w-14 h-14 flex items-center justify-center rounded-full shadow-xl 
                 transition-all duration-300 animate-bounce"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
}
