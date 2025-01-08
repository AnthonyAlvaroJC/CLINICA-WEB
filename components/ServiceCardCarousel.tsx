import { useState, useEffect } from 'react';

interface ServiceCardCarouselProps {
    images: { src: string; subtitle: string; content: string }[];
    title: string;
}

export default function ServiceCardCarousel({ images, title }: ServiceCardCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar automáticamente de imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Cambiar a la siguiente imagen
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Cambiar a la imagen anterior
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 w-[400px] h-[600px]">
            {/* Título */}
            <div className="text-center py-4">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            </div>

            {/* Imagen con carrusel */}
            <div className="relative w-full h-[350px] group">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].subtitle}
                    className="w-full h-full object-cover"
                />
                {/* Botón Ver Más dentro de la imagen */}
                <button
                    className="absolute bottom-4 right-4 bg-[#135e82] text-white text-sm py-2 px-4 rounded-lg shadow-md hover:bg-[#fbd862] transition"
                    onClick={() => alert(`Más información sobre ${images[currentIndex].subtitle}`)}
                >
                    Ver más
                </button>
                {/* Botones para cambiar de imagen */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:scale-110 hover:bg-green-600 transition opacity-0 group-hover:opacity-100"
                    onClick={prevImage}
                    aria-label="Anterior"
                >
                    {'<'}
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:scale-110 hover:bg-green-600 transition opacity-0 group-hover:opacity-100"
                    onClick={nextImage}
                    aria-label="Siguiente"
                >
                    {'>'}
                </button>
            </div>

            {/* Texto asociado a la imagen */}
            <div className="p-6 flex flex-col justify-between h-[200px]">
                <div>
                    <h4 className="text-lg font-semibold text-green-700">{images[currentIndex].subtitle}</h4>
                    <p className="text-gray-600 mt-2">{images[currentIndex].content}</p>
                </div>
            </div>
        </div>
    );
}
