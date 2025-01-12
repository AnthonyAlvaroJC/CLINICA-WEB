import ServiceCardCarousel from './ServiceCardCarousel';

export default function Services() {
    const services = [
        {
            title: 'Medicina Estética Facial',
            images: [
                {
                    src: '/ACIDO_HIALURONICO_FACIAL.png',
                    subtitle: 'Ácido Hialurónico Facial',
                    content:
                        'El ácido hialurónico es un gran aliado para combatir los signos del envejecimiento, hidratar y revitalizar la piel, devolviéndole elasticidad y frescura.',
                },
                {
                    src: '/LIMPIEZA_FACIAL.png',
                    subtitle: 'Limpieza Facial',
                    content:
                        'Una limpieza profunda que elimina impurezas, células muertas y estimula la regeneración de la piel para un rostro fresco y radiante.',
                },
                {
                    src: '/RADIOFRECUENCIA_FACIAL.png',
                    subtitle: 'Radiofrecuencia Facial',
                    content:
                        'Tratamiento no invasivo que activa la producción de colágeno, reduciendo arrugas y líneas de expresión para un efecto rejuvenecedor.',
                },
            ],
        },
        {
            title: 'Medicina Corporal',
            images: [
                {
                    src: '/DEPILACION_LASER.png',
                    subtitle: 'Depilación Láser',
                    content:
                        'Elimina el vello no deseado de manera definitiva con tecnología láser avanzada, segura y eficaz para todo tipo de piel.',
                },
                {
                    src: '/HIFU_CORPORAL.png',
                    subtitle: 'HIFU Corporal',
                    content:
                        'Ultrasonido focalizado de alta intensidad que ayuda a reducir la grasa localizada y mejorar la firmeza de la piel.',
                },
                {
                    src: '/RADIOFRECUENCIA_CORPORAL.png',
                    subtitle: 'Radiofrecuencia Corporal',
                    content:
                        'Estimula la producción de colágeno y elastina para reafirmar la piel, reducir celulitis y remodelar el contorno corporal.',
                },
            ],
        },
        {
            title: 'Medicina Regenerativa',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Exosomas',
                    content:
                        'Innovador tratamiento regenerativo que utiliza exosomas para reparar tejidos, mejorar la salud celular y revitalizar la piel.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Foto-Terapia',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Test Epigenético',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
            ],
        },

        {
            title: 'Medicina Antiaging',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Terapia Hormonal Bioidénticas con Pellets (CHIP)',
                    content:
                        'Implantes subdérmicos que liberan hormonas bioidénticas, mejorando síntomas hormonales como fatiga y baja libido. Proporcionan equilibrio estable y bienestar prolongado.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Formulaciones Magistrales de Hormonas Bioidénticas',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Modulación Hormonal en Menopausia y Andropausia',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
               
            ],
        },
        {
            title: 'Medicina Endocrinológia',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Exosomas',
                    content:
                        'Innovador tratamiento regenerativo que utiliza exosomas para reparar tejidos, mejorar la salud celular y revitalizar la piel.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Foto-Terapia',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Test Epigenético',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
            ],
        },
        {
            title: '------------------------',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Exosomas',
                    content:
                        'Innovador tratamiento regenerativo que utiliza exosomas para reparar tejidos, mejorar la salud celular y revitalizar la piel.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Foto-Terapia',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Test Epigenético',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
            ],
        },
        {
            title: 'Tratamiento de cirugía no invasiva',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Exosomas',
                    content:
                        'Innovador tratamiento regenerativo que utiliza exosomas para reparar tejidos, mejorar la salud celular y revitalizar la piel.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Foto-Terapia',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Test Epigenético',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
            ],
        },
        {
            title: 'Tratamiento de cirugía estética',
            images: [
                {
                    src: '/EXOSOMAS.png',
                    subtitle: 'Exosomas',
                    content:
                        'Innovador tratamiento regenerativo que utiliza exosomas para reparar tejidos, mejorar la salud celular y revitalizar la piel.',
                },
                {
                    src: '/FOTO_TERAPIA.png',
                    subtitle: 'Foto-Terapia',
                    content:
                        'Terapia de luz avanzada que trata acné, manchas, envejecimiento y otros problemas cutáneos con resultados visibles.',
                },
                {
                    src: '/TEST_EPIGENETICO.png',
                    subtitle: 'Test Epigenético',
                    content:
                        'Análisis avanzado para evaluar la influencia del entorno y el estilo de vida en tu salud, orientándote hacia un bienestar óptimo.',
                },
            ],
        },
        
    ];

    return (
        <div className="bg-gray-50 py-16">
            <h2 className="text-4xl font-bold text-center text-[#135e82] mb-8">Nuestros Servicios</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCardCarousel
                        key={index}
                        title={service.title}
                        images={service.images}
                    />
                ))}
            </div>
        </div>
    );
}
