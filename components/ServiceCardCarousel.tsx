import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardCarouselProps {
  images: {
    src: string;
    subtitle: string;
    content: string;
    detailContent?: string;
  }[];
  title: string;
}

export default function ServiceCardCarousel({ images, title }: ServiceCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [buttonCoords, setButtonCoords] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showDetail) {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, showDetail]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonCoords({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    setShowDetail(true);
  };

  const closeModal = () => {
    setShowDetail(false);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const DetailView = () => (
    <AnimatePresence>
      {showDetail && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={handleClickOutside}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl w-full max-w-6xl overflow-y-auto max-h-[90vh]"
            initial={{
              x: buttonCoords.x - window.innerWidth / 2,
              y: buttonCoords.y - window.innerHeight / 2,
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.2,
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="p-4 flex justify-between items-center border-b sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Contenido del modal */}
            <motion.div
              className="p-6 space-y-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {images.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 ${index !== 0 ? "border-t pt-12" : ""}`}
                >
                  {/* Texto */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-[#135e82] mb-4">
                      {service.subtitle}
                    </h4>
                    <p className="text-gray-600">
                      {service.detailContent || service.content}
                    </p>
                  </div>
                  {/* Imagen */}
                  <div className="md:w-1/2">
                    <img
                      src={service.src}
                      alt={service.subtitle}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="flex justify-center items-center min-h-[50px]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 w-[400px] h-[600px]">
          {/* Title */}
          <div className="text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          </div>

          {/* Image carousel */}
          <div className="relative w-full h-[350px] group">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].subtitle}
              className="w-full h-full object-cover"
            />
            {/* Ver más button */}
            <button
              ref={buttonRef}
              className="absolute bottom-4 right-4 bg-[#135e82] text-white text-sm py-2 px-4 rounded-lg shadow-md hover:bg-[#fbd862] transition"
              onClick={openModal}
            >
              Ver más
            </button>
            {/* Navigation buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:scale-110 hover:bg-green-600 transition opacity-0 group-hover:opacity-100"
              onClick={prevImage}
              aria-label="Anterior"
            >
              {"<"}
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:scale-110 hover:bg-green-600 transition opacity-0 group-hover:opacity-100"
              onClick={nextImage}
              aria-label="Siguiente"
            >
              {">"}
            </button>
          </div>

          {/* Card content */}
          <div className="p-6 flex flex-col justify-between h-[200px]">
            <div>
              <h4 className="text-lg font-semibold text-[#135e82]">{images[currentIndex].subtitle}</h4>
              <p className="text-gray-600 mt-2">{images[currentIndex].content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail modal con animación */}
      <DetailView />
    </>
  );
}
