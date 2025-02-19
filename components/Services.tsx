import ServiceCardCarousel from "./ServiceCardCarousel";

export default function Services() {
  const services = [
    {
      title: "MEDICINA ESTÉTICA FACIAL",
      images: [
        {
          src: "/img/ACIDO_HIALURONICO_FACIAL.png",
          subtitle: "Ácido Hialurónico Facial",
          content:
            "Redefine y realza las áreas clave de tu rostro con uno de los tratamientos más versátiles y demandados en medicina estética. Ya sea para dar volumen a pómulos, suavizar ojeras, rellenar líneas nasogenianas o perfilar labios, el ácido hialurónico ofrece resultados naturales e inmediatos. Este tratamiento también hidrata profundamente la piel desde el interior, devolviendo elasticidad y juventud.",
        },
        {
          src: "/img/BOTOX.png",
          subtitle: "BOTOX",
          content:
            "El tratamiento número uno para combatir y prevenir las líneas de expresión en áreas como frente, entrecejo y patas de gallo. Botox relaja los músculos faciales, dejando un aspecto fresco, relajado y rejuvenecido. Además, su uso preventivo es ideal para retrasar la aparición de arrugas.",
        },
        {
          src: "/img/HILOS TENSORES.png",
          subtitle: "HILOS TENSORES",
          content:
            "Si buscas un efecto lifting sin necesidad de cirugía, los hilos tensores son la solución perfecta. Este procedimiento reposiciona los tejidos, estimula la producción de colágeno y elastina, y redefine el contorno facial. Los resultados son inmediatos y mejoran con el tiempo, dejando un rostro firme y rejuvenecido.",
        },
      ],
    },
    {
      title: "CUIDADO DE LA PIEL FACIAL",
      images: [
        {
          src: "/img/MESOTERAPIA FACIAL.png",
          subtitle: "MESOTERAPIA FACIAL",
          content:
            "Revitaliza tu piel con un cóctel de vitaminas, minerales, antioxidantes y ácido hialurónico que hidratan profundamente y reparan los daños causados por factores externos como el sol y la contaminación. Este tratamiento mejora la textura, luminosidad y firmeza de la piel.",
        },
        {
          src: "/img/LIMPIEZA_FACIAL.png",
          subtitle: "Limpieza Facial",
          content:
            "Un paso esencial para mantener una piel saludable. La limpieza facial elimina impurezas, puntos negros y células muertas acumuladas, dejando tu piel fresca, renovada y preparada para absorber mejor los tratamientos que sigan.",
        },

        {
          src: "/img/BIOFOTOTERAPIA.png",
          subtitle: "BIOFOTOTERAPIA",
          content:
            "Este tratamiento utiliza tecnología de luz LED para regenerar la piel, combatir manchas, mejorar cicatrices de acné y estimular la producción de colágeno. Es indoloro, no invasivo y apto para todo tipo de pieles.",
        },
        {

          src: "/img/LÁSER LPI.png",
          subtitle: "LÁSER LPI",
          content:
            "La solución perfecta para unificar el tono de la piel, eliminar manchas solares y mejorar la textura de forma rápida y efectiva. Este láser también combate el enrojecimiento y mejora la luminosidad.",
        },
      ],
    },

    {
      title: "MEDICINA ESTÉTICA CORPORAL",
      images: [
        {
          src: "/img/MESOTERAPIA CORPORAL.png",
          subtitle: "MESOTERAPIA CORPORAL",
          content:
            "Este tratamiento reduce grasa localizada, combate la celulitis y mejora la textura de la piel. Mediante microinyecciones personalizadas, se estimula la eliminación de toxinas y se activa la regeneración celular para lograr una figura más estilizada..",
        },
        {
          src: "/img/MASAJE DRENANTE.png",
          subtitle: "MASAJE DRENANTE",
          content:
            "Perfecto para mejorar la circulación, reducir la retención de líquidos y aliviar la sensación de pesadez. Además, ayuda a desintoxicar el cuerpo y preparar la piel para otros tratamientos.",
        },
        {
          src: "/img/DEPILACION_LASER.png",
          subtitle: "Depilación Láser",
          content:
            "Elimina el vello no deseado de manera definitiva con tecnología láser avanzada, segura y eficaz para todo tipo de piel.",
        },
        {
          src: "/img/HIFU_CORPORAL.png",
          subtitle: "HIFU Corporal",
          content:
            "Ultrasonido focalizado de alta intensidad que ayuda a reducir la grasa localizada y mejorar la firmeza de la piel.",
        },
        {
          src: "/img/RADIOFRECUENCIA_CORPORAL.png",
          subtitle: "Radiofrecuencia Corporal",
          content:
            "Estimula la producción de colágeno y elastina para reafirmar la piel, reducir celulitis y remodelar el contorno corporal.",
        },
        {
          src: "/img/MUSCULPTING.png",
          subtitle: "MUSCULPTING",
          content:
            "Utilizando energía electromagnética de alta intensidad, este tratamiento tonifica y aumenta la masa muscular en áreas clave como el abdomen, los glúteos y los brazos. Es ideal para complementar tu rutina de ejercicio y lograr un cuerpo más definido.",
        },
        {
          src: "/img/CRIOLIPOLIS.png",
          subtitle: "CRIOLIPOLIS",
          content:
            "Elimina grasa localizada congelando las células grasas para que sean eliminadas de forma natural por el cuerpo. Es un tratamiento no invasivo, indoloro y con resultados visibles en pocas sesiones.",
        },
        {
          src: "/img/DEPILACION LASER.png",
          subtitle: "DEPILACION LASER",
          content:
            "Olvídate del vello no deseado con este tratamiento definitivo. La depilación láser ofrece una piel suave, sin irritaciones y libre de vello en cualquier parte del cuerpo.",
        },
      ],
    },
    {
      title: 'MEDICINA REGENERATIVA "FACIAL"',
      images: [
        {
          src: "/img/PRP.png",
          subtitle: "PRP (Plasma Rico en Plaquetas)",
          content:
            "Aprovecha el poder de tu propia sangre para regenerar la piel, suavizar líneas de expresión y mejorar cicatrices.",
        },
        {
          src: "/img/EXOMAS.png",
          subtitle: "EXOMAS",
          content:
            "Avance revolucionario en regeneración celular que promueve una piel más firme y uniforme.",
        },
        {
          src: "/img/LIPOFILLING CON GRASA AUTOLOGA.png",
          subtitle: "LIPOFILLING FACIAL",
          content:
            "Recupera el volumen perdido usando tu propia grasa para lograr un rejuvenecimiento natural y duradero.",
        },
        {
          src: "/img/BIO-ESTIMULACIÓN CUTANEA.png",
          subtitle: "BIOESTIMULACIÓN CUTÁNEA",
          content:
            "Combate la flacidez y mejora la textura de la piel estimulando el colágeno natural.",
        },
        {
          src: "/img/RADIOFRECUENCIA FACIAL.png",
          subtitle: "RADIOFRECUENCIA FACIAL",
          content:
            "Logra un efecto tensor visible sin cirugía, ideal para redefinir el contorno facial",
        },
      ],
    },

    {
      title: 'MEDICINA REGENERATIVA "CAPILAR"',
      images: [
        {
          src: "/img/PRP - CITOQUINAS.png",
          subtitle: "PRP - CITOQUINAS",
          content:
            "Estimula el crecimiento del cabello y fortalece los folículos.",
        },
        {
          src: "/img/exomas capilar.png",
          subtitle: "EXOMAS CAPILARES",
          content:
            "La solución más avanzada para frenar la caída del cabello y restaurar su densidad.",
        },
        {
          src: "/img/MESOTERAPIA CAPILAR.png",
          subtitle: "MESOTERAPIA CAPILAR",
          content:
            "Revitaliza tu cuero cabelludo con un cóctel de nutrientes que fortalecen el cabello y lo hacen más saludable.",
        },
      ],
    },

    {
      title: "TERAPIA DE HORMONAS BIOIDÉNTICAS",
      images: [
        {
          src: "/img/REJUCHIP.png",
          subtitle: "PELLETS (CHIP)",
          content:
            "Un tratamiento revolucionario que asegura un equilibrio hormonal continuo. Mejora tu energía, libido, sueño y bienestar general. Ideal para hombres y mujeres.",
        },
        {
          src: "/img/MODULACION HORMONAL.png",
          subtitle: "MODULACION HORMONAL",
          content:
            "Alivia los síntomas de la menopausia y andropausia con soluciones personalizadas que mejoran la calidad de vida.",
        },
      
      ],
    },

    {
      title: "MEDICINA ANTIAGING ORTOMOLECULAR",
      images: [
        {
          src: "/img/suero terapia.png",
          subtitle: "SUERO ANTIOXIDANTE, DETOX E INMUNE",
          content:
            "Fortalece tu sistema inmunológico, desintoxica tu organismo y combate el estrés oxidativo con este potente suero lleno de vitaminas y antioxidantes.",
        },
        {
          src: "/img/SUPLEMENTACION VITAMINICA.png",
          subtitle: "SUPLEMENTACIÓN NUTRICIONAL",
          content:
            "Un enfoque personalizado con nutracéuticos y adaptógenos que equilibran tu salud desde el interior, optimizando tu energía y bienestar.",
        },
      ],
    },

    {
      title: "NUTRICIÓN PERSONALIZADA",
      images: [
        {
          src: "/img/EVALUACION INTEGRAL.png",
          subtitle: "EVALUACIÓN INTEGRAL INTELIGENTE",
          content:
            "Diagnósticos avanzados que analizan tus hábitos, necesidades y genética para crear un plan único y efectivo.",
        },
        {
          src: "/img/TEST EPIGENETICOS.png",
          subtitle: "Test Epigenético",
          content:
            "Descubre cómo tus genes influyen en tu salud y utiliza esta información para optimizar tu nutrición y estilo de vida.",
        },
      ],
    },

    {
      title: "H. PROCEDIMIENTOS ESTETICOS UROLOGICOS",
      images: [
        {
          src: "/img/Alargamiento de Pene.png",
          subtitle: "Alargamiento de Pene",
          content:
            "Procedimiento médico que mejora la apariencia y funcionalidad mediante técnicas mínimamente invasivas, realizado por especialistas urológicos cualificados.",
        },
        {
          src: "/img/ershot xl plama.png",
          subtitle: "ERSHOT XL PLAMA",
          content:
            "Tratamiento regenerativo que utiliza plasma rico en plaquetas para mejorar la salud del tejido. Este procedimiento estimula la regeneración natural de los tejidos.",
        },
      ],
    },

    {
      title: "CIRUGIAS ESTETICAS GINECOLOGICAS AMBULATORIAS",
      images: [
        {
          src: "/img/AUMENTO SENSIBILIDAD CLOTORIDIANA (PUNTO O-SHOT).png",
          subtitle: "AUMENTO SENSIBILIDAD CLOTORIDIANA (PUNTO O-SHOT)",
          content:
            "Procedimiento regenerativo que utiliza factores de crecimiento derivados del plasma rico en plaquetas para mejorar la sensibilidad y función del área íntima. Tratamiento ambulatorio mínimamente invasivo con resultados naturales.",
        },
        {
          src: "/img/INCREMENTO DEL PUNTO G.png",
          subtitle: "INCREMENTO DEL PUNTO G",
          content:
            "Procedimiento mínimamente invasivo que mejora la sensibilidad mediante la aplicación de sustancias biocompatibles. Tratamiento personalizado que busca optimizar el bienestar íntimo de forma segura y efectiva.",
        },
        {
          src: "/img/LABIOPLASTIAS.png",
          subtitle: "LABIOPLASTIAS",
          content:
            "Procedimiento quirúrgico que remodela y corrige la forma de los labios menores para mejorar tanto la estética como la funcionalidad. Técnica precisa que reduce molestias y mejora la calidad de vida de la paciente.",
        },
        {
          src: "/img/LIFTING QUIRÚRGICO DE LABIOS MAYORES.png",
          subtitle: "LIFTING QUIRÚRGICO DE LABIOS MAYORES",
          content:
            "Técnica quirúrgica especializada que rejuvenece y reafirma los labios mayores, restaurando un aspecto más juvenil y mejorando el contorno del área íntima. Procedimiento ambulatorio con resultados duraderos.",
        },
        {
          src: "/img/LIPOASPIRACION DE MONTE DE VENUS.png",
          subtitle: "LIPOASPIRACION DE MONTE DE VENUS",
          content:
            "Procedimiento quirúrgico de precisión que reduce el exceso de tejido graso en el monte de Venus, mejorando el contorno y la apariencia del área. Técnica que proporciona resultados armónicos y naturales.",
        },
        {
          src: "/img/LIPOTRANSFERENCIA GRASA AUTOLOGA A ZONA INTIMA.png",
          subtitle: "LIPOTRANSFERENCIA GRASA AUTOLOGA A ZONA INTIMA",
          content:
            "Innovador procedimiento que utiliza la grasa propia de la paciente para mejorar el volumen y contorno de áreas específicas. Ofrece resultados naturales y duraderos utilizando tejido totalmente biocompatible.",
        },
        {
          src: "/img/MONTPLASTÍAS.png",
          subtitle: "MONTPLASTÍAS",
          content:
            "Cirugía estética especializada que remodela y mejora la apariencia del monte de Venus, proporcionando un contorno más armónico y estético del área íntima. Procedimiento personalizado según las necesidades de cada paciente.",
        },
        {
          src: "/img/OBTENCION DE FRACCION VASCULAR ESTROMAL.png",
          subtitle: "OBTENCION DE FRACCION VASCULAR ESTROMAL",
          content:
            "Técnica avanzada de medicina regenerativa que obtiene células regenerativas del propio tejido adiposo para su uso en procedimientos de rejuvenecimiento y regeneración tisular. Proceso que potencia la capacidad natural de regeneración.",
        },
        {
          src: "/img/OBTENCION DE NANOFAT.png",
          subtitle: "OBTENCION DE NANOFAT",
          content:
            "Proceso especializado de refinamiento de grasa autóloga hasta obtener una textura ultrafina, ideal para procedimientos de rejuvenecimiento y mejoría de la calidad tisular. Técnica que maximiza el potencial regenerativo del tejido adiposo.",
        },
        {
          src: "/img/PERINEOPLASTIAS.png",
          subtitle: "PERINEOPLASTIAS",
          content:
            "Procedimiento quirúrgico reconstructivo que restaura y fortalece la estructura del perineo, mejorando tanto la funcionalidad como la estética del área. Intervención que proporciona mayor confort y bienestar.",
        },
        {
          src: "/img/RELLENO O AUMENTO DE LABIOS MAYORES.png",
          subtitle: "RELLENO O AUMENTO DE LABIOS MAYORES",
          content:
            "Tratamiento estético que restaura el volumen y mejora la apariencia de los labios mayores utilizando materiales biocompatibles o grasa autóloga. Procedimiento personalizado que logra resultados naturales y armónicos.",
        },
        {
          src: "/img/VAGINOPLASTIAS.png",
          subtitle: "VAGINOPLASTIAS",
          content:
            "Procedimiento quirúrgico especializado que mejora el tono y la estructura vaginal, optimizando tanto la funcionalidad como el confort. Técnica adaptada a las necesidades específicas de cada paciente con resultados satisfactorios.",
        },
      ],
    },
    {
      title: "TRATAMIENTOS NO QUIRURGICOS",
      images: [
        {
          src: "/img/HIFU INTIMO.png",
          subtitle: "HIFU INTIMO",
          content:
            "Tratamiento no invasivo que utiliza ultrasonido focalizado de alta intensidad para mejorar la firmeza y elasticidad de los tejidos. Procedimiento seguro y efectivo que estimula la producción natural de colágeno.",
        },
        {
          src: "/img/LASER CO2 -1.png",
          subtitle: "LASER CO2 -1",
          content:
            "Tecnología láser avanzada que ayuda a mejorar la calidad y elasticidad de los tejidos. Tratamiento preciso y controlado que promueve la regeneración natural.",
        },
        {
          src: "/img/RADIOFRECUENCIA INTIMA.png",
          subtitle: "RADIO FRECUENCIA INTIMA",
          content:
            "Procedimiento no invasivo que utiliza energía de radiofrecuencia para mejorar el tono y la elasticidad de los tejidos. Tratamiento seguro que estimula la producción de colágeno.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-4xl font-bold text-center text-[#135e82] mb-8">
        Nuestros Servicios
      </h2>
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
