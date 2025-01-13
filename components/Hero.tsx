import { useState, useEffect } from 'react';

const carouselData = [
    {
        image: 'carrucell1.png',
        title: 'Medicina Estética Facial',
        description: 'Rejuvenece tu rostro con tratamientos avanzados como ácido hialurónico, Botox y más.',
        width: '80%', // Porcentaje del ancho personalizado para esta imagen
        height: '90%', // Porcentaje de la altura personalizado para esta imagen
    },
    {
        image: 'carrucell2.png',
        title: 'Medicina Corporal',
        description: 'Modela tu cuerpo con criolipólisis, mesoterapia y tecnología de vanguardia.',
        width: '100%', // Porcentaje del ancho personalizado para esta imagen
        height: '76%', // Porcentaje de la altura personalizado para esta imagen
    },
    {
        image: 'carrucell3.png',
        title: 'Medicina Regenerativa',
        description: 'Estimula la regeneración natural de tu piel con terapias PRP y bioestimulación.',
        width: '60%', // Porcentaje del ancho personalizado para esta imagen
        height: '85%', // Porcentaje de la altura personalizado para esta imagen
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    const { image, title, description, width, height } = carouselData[currentIndex];

    return (
        <section className="relative h-screen flex items-center bg-gradient-to-r from-[#0e4a6e] via-[#135e82] to-[#1994bf]">
            {/* Contenido del Texto */}
            <div className="w-full md:w-1/3 h-full flex flex-col justify-center px-8 md:px-12 text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-[#fbd862]">{title}</h1>
                <p className="mt-4 text-lg md:text-xl">{description}</p>
                <a
                    href="#servicios"
                    className="mt-6 inline-block bg-white text-[#135e82] py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    Explorar Servicios
                </a>
            </div>

            {/* Carrusel de Imágenes */}
            <div className="w-full md:w-2/3 h-full relative flex items-end justify-center">
                <img
                    src={image}
                    alt={`Carrusel ${currentIndex}`}
                    className="transition-all duration-1000 ease-in-out"
                    style={{
                        width: width, // Aplica el ancho personalizado
                        height: height, // Aplica la altura personalizada
                        objectFit: 'contain',
                    }}
                />
            </div>
        </section>
    );
}