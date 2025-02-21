import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <motion.section
      id="nosotros"
      className="bg-white py-16 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* Contenedor del SVG Animado */}
        <motion.div
          className="relative w-[400px] h-[400px] md:w-[450px] md:h-[450px] flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute">
            <clipPath id="clip">
              <motion.path
                d="
                  M 200 30
                  Q 350 70, 370 200
                  Q 390 330, 200 370
                  Q 60 330, 30 200
                  Q 60 70, 200 30
                "
                animate={{
                  d: [
                    `
                    M 230 35
                    Q 360 80, 370 200
                    Q 380 320, 200 360
                    Q 60 320, 30 200
                    Q 60 80, 200 40
                    `,
                    `
                    M 230 35
                    Q 340 60, 370 200
                    Q 390 340, 200 370
                    Q 60 340, 30 200
                    Q 60 60, 200 30
                    `,
                    `
                    M 230 35
                    Q 350 90, 370 200
                    Q 390 310, 200 350
                    Q 60 310, 20 200
                    Q 60 90, 200 40
                    `
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </clipPath>
          </svg>

          <motion.img
            src="/img/Perfil.png"
            alt="Dr. Luis Enrique Calderón Murga"
            className="w-full h-full object-cover shadow-lg transition-all duration-500"
            style={{ clipPath: "url(#clip)" }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Información del doctor */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-800">
            Dr. Luis Enrique Calderón Murga
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            Gineco-Obstetra | Especialista en Fertilidad y Laparoscopia | Ginecología Estética - Láser
          </p>
         
        </motion.div>
      </div>
    </motion.section>
  );
}
