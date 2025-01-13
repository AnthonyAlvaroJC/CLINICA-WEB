import ServiceCardCarousel from './ServiceCardCarousel';

export default function Services() {
    const services = [
        {
            title: 'MEDICINA ESTÉTICA FACIAL',
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
                {
                    src: '/BIOFOTOTERAPIA.png',
                    subtitle: 'BIOFOTOTERAPIA',
                    content:
                        '..........',
                },
                {
                    src: '/BOTOX.png',
                    subtitle: 'BOTOX',
                    content:
                        '..........',
                },
                {
                    src: '/HILOS TENSORES.png',
                    subtitle: 'HILOS TENSORES',
                    content:
                        '..........',
                },
                {
                    src: '/LÁSER LPI.png',
                    subtitle: 'LÁSER LPI',
                    content:
                        '..........',
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
            title: 'H. PROCEDIMIENTOS ESTETICOS UROLOGICOS',
            images: [
                {
                    src: '/ALARGAMIENTO DE PENE.png',
                    subtitle: 'Alargamiento de Pene',
                    content:
                        '...................................',
                },
                {
                    src: '/ershot xl plama.png',
                    subtitle: 'ERSHOT XL PLAMA',
                    content:  '...............................',
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
            title: 'CIRUGIAS ESTETICAS GINECOLOGICAS AMBULATORIAS',
            images: [
                {
                    src: '/AUMENTO SENSIBILIDAD CLOTORIDIANA (PUNTO O-SHOT).png',
                    subtitle: 'AUMENTO SENSIBILIDAD CLOTORIDIANA (PUNTO O-SHOT)',
                    content:
                        '...........................',
                },
                {
                    src: '/INCREMENTO DEL PUNTO G.png',
                    subtitle: 'INCREMENTO DEL PUNTO G',
                    content:
                        '...........................',
                },
                {
                    src: '/LABIOPLASTIAS.png',
                    subtitle: 'LABIOPLASTIAS',
                    content:
                        '..............................',
                },
                {
                    src: '/LIFTING QUIRURGICO DE LABIOS MAYORES.png',
                    subtitle: 'LIFTING QUIRURGICO DE LABIOS MAYORES',
                    content:
                        '..............................',
                },
                {
                    src: '/LIPOASPIRACION DE MONTE DE VENUS.png',
                    subtitle: 'LIPOASPIRACION DE MONTE DE VENUS',
                    content:
                        '..............................',
                },
                {
                    src: '/LIPOTRANSFERENCIA GRASA AUTOLOGA A ZONA INTIMA.png',
                    subtitle: 'LIPOTRANSFERENCIA GRASA AUTOLOGA A ZONA INTIMA',
                    content:
                        '..............................',
                },
                {
                    src: '/MONTPLASTÍAS.png',
                    subtitle: 'MONTPLASTÍAS',
                    content:
                        '..............................',
                },
                {
                    src: '/OBTENCION DE FRACCION VASCULAR ESTROMAL.png',
                    subtitle: 'OBTENCION DE FRACCION VASCULAR ESTROMAL',
                    content:
                        '..............................',
                },
                {
                    src: '/OBTENCION DE NANOFAT.png',
                    subtitle: 'OBTENCION DE NANOFAT',
                    content:
                        '..............................',
                },
                {
                    src: '/PERINEOPLASTIAS.png',
                    subtitle: 'PERINEOPLASTIAS',
                    content:
                        '..............................',
                },
                {
                    src: '/RELLENO O AUMENTO DE LABIOS MAYORES.png',
                    subtitle: 'RELLENO O AUMENTO DE LABIOS MAYORES',
                    content:
                        '..............................',
                },
                {
                    src: '/VAGINOPLASTIAS.png',
                    subtitle: 'VAGINOPLASTIAS',
                    content:
                        '..............................',
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
