import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1994bf] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo y Título */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img
            src="/logo1.png" // Reemplaza con la ruta de tu logo
            alt="Logo Regenera Center"
            className="w-12 h-12" // Ajusta el tamaño del logo según sea necesario
          />
          <h1 className="text-2xl font-bold text-[#fbd862]">
          Regenera Center
          </h1>
        </div>

 {/* Navegación */}
<nav className="space-x-6 text-white"> {/* Cambié text-gray-800 a text-white */}
  <a href="#inicio" className="hover:text-[#fbd862] no-underline">
    INICIO
  </a>
  <a href="#servicios" className="hover:text-[#fbd862] no-underline">
    SERVICIOS
  </a>
  <a href="#nosotros" className="hover:text-[#fbd862] no-underline">
    NOSOTROS
  </a>
  <a href="#contacto" className="hover:text-[#fbd862] no-underline">
    CONTACTO
  </a>
</nav>


        {/* Íconos de Redes Sociales */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/share/gyFRCB4j7te9wFnk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-800 transition"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/regeneracenterperu/profilecard/?igsh=MXBxMmh0bXdrbjB2aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-pink-700 transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.tiktok.com/@regeneracenterperu?_t=ZM-8tzyXtxn3VX&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-black transition"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
        </div>
      </div>
    </header>
  );
}
