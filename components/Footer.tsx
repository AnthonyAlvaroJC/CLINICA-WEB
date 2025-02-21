import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sección Acerca de Nosotros */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Regenera Center</h3>
                    <p className="text-gray-400">
                        Donde la salud y la belleza convergen. Nuestro compromiso es ofrecerte experiencias que transformen y regeneren desde adentro hacia afuera.
                    </p>
                </motion.div>

                {/* Sección de Enlaces Rápidos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#inicio" className="text-gray-400 hover:text-white transition">Inicio</a>
                        </li>
                        <li>
                            <a href="#servicios" className="text-gray-400 hover:text-white transition">Servicios</a>
                        </li>
                        <li>
                            <a href="#nosotros" className="text-gray-400 hover:text-white transition">Nosotros</a>
                        </li>
                        <li>
                            <a href="#contacto" className="text-gray-400 hover:text-white transition">Contacto</a>
                        </li>
                    </ul>
                </motion.div>

                {/* Sección Información de Contacto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-[#fbd862] mr-3" />
                            <span className="text-gray-400">+51 971 798 222</span>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-[#fbd862] mr-3" />
                            <span className="text-gray-400">regeneracenter520@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#fbd862] mr-3" />
                            <span className="text-gray-400">Av. Paso de los Andes 520. Pueblo Libre</span>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Línea Divisoria */}
            <div className="border-t border-gray-700 mt-10"></div>

            {/* Redes Sociales y Derechos de Autor */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center mt-6"
            >
                <p className="text-gray-400 text-sm">© 2025 Regenera Center. Todos los derechos reservados.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {/* Redes Sociales con Hover */}
                    <motion.a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </motion.a>
                    <motion.a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </motion.a>
                </div>
            </motion.div>
        </footer>
    );
}
