import Image from 'next/image';

const carouselData = [
    {
        image: '/img/Inicio1.png',
        title: 'Medicina Estética Facial',
        description: 'Rejuvenece tu rostro con tratamientos avanzados como ácido hialurónico, Botox y más.',
    },
];

export default function Hero() {
    const { image, title, description } = carouselData[0];

    return (
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#0e4a6e] via-[#135e82] to-[#1994bf]">
            {/* Capa de degradado superior */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#0e4a6e] to-transparent"></div>

            {/* Contenido del Texto */}
            <div className="w-full md:w-1/3 px-6 md:px-12 text-white text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-[#fbd862]">{title}</h1>
                <p className="mt-4 text-lg md:text-xl">{description}</p>
                <a
                    href="#servicios"
                    className="mt-6 inline-block bg-white text-[#135e82] py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    Explorar Servicios
                </a>
            </div>

            {/* Imagen Estática */}
            <div className="w-full md:w-2/3 flex justify-center items-end relative">
                <Image
                    src={image}
                    alt="Carrusel Estático"
                    width={800}
                    height={600}
                    className="transition-all duration-1000 ease-in-out object-contain max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl"
                />

                {/* Capa de degradado inferior */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0e4a6e] to-transparent"></div>
            </div>
        </section>
    );
}
