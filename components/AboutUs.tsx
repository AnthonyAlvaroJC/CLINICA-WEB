import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
    '/person2.png',
    '/person3.png',
    '/person6.png', // Puedes agregar más imágenes si las tienes.
];

export default function AboutUs() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="nosotros" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Título con Animación */}
                <motion.h2
                    className="text-5xl font-bold text-center text-[#135e82] mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Sobre Nosotros
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Texto con Animación */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-800">
                            Un Enfoque Holístico
                        </h3>
                        <p className="text-lg text-gray-600 mt-4">
                            En <span className="font-bold text-[#fbd862]">Regenera Center</span>, creemos en una
                            conexión profunda entre mente, cuerpo y espíritu. Nuestro equipo
                            multidisciplinario trabaja en armonía para ofrecer soluciones que
                            combinen lo mejor de la medicina estética, regenerativa e integrativa.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Nuestro objetivo es transformar la salud y la belleza desde adentro
                            hacia afuera, brindando experiencias personalizadas con un enfoque
                            humano y tecnológico. Nos comprometemos a ayudarte a alcanzar tu
                            mejor versión.
                        </p>
                    </motion.div>

                    {/* Carrusel de Imágenes */}
                    <div className="relative w-full h-64 md:h-96">
                        <img
                            src={images[currentIndex]}
                            alt={`Equipo Regenera Center ${currentIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
