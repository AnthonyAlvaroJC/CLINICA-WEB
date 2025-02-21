import Image from 'next/image';

const carouselData = [
    {
        image: '/img/Inicio.png',
        title: 'Medicina Estética Facial',
        description: 'Rejuvenece tu rostro con tratamientos avanzados como ácido hialurónico, Botox y más.',
        width: '80%',
        height: '90%',
    },
];

export default function Hero() {
    const { image, title, description, width, height    } = carouselData[0];

    return (
        <section className="relative h-screen flex items-center bg-gradient-to-r from-[#0e4a6e] via-[#135e82] to-[#1994bf]">
            {/* Capa de degradado superior para difuminado */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#0e4a6e] to-transparent"></div>

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

            {/* Imagen Estática */}
            <div className="w-full md:w-2/3 h-full relative flex items-end justify-center">
            <Image
    src={image}
    alt="Carrusel Estático"
    width={800} // Asegúrate de definir width y height
    height={600}
    className="transition-all duration-1000 ease-in-out object-contain"
/>

                {/* Capa de degradado inferior para efecto difuminado */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0e4a6e] to-transparent"></div>
            </div>
        </section>
    );
}
