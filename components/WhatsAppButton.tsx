import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=51971798222"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-400 text-white rounded-full p-4 shadow-xl hover:bg-green-500 transition transform hover:scale-105"
            aria-label="Chat en WhatsApp"
        >
            <FaWhatsapp size={24} />
        </a>
    );
}
