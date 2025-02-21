import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, X } from "lucide-react"; // Importando iconos de menú
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil

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
          <Image
            src="/img/logo1.png"
            alt="Logo Regenera Center"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <h1 className="text-2xl font-bold text-[#fbd862]">
            Regenera Center
          </h1>
        </div>

        {/* Botón del Menú en Móviles */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación - Visible en Escritorio */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#inicio" className="hover:text-[#fbd862]">INICIO</a>
          <a href="#servicios" className="hover:text-[#fbd862]">SERVICIOS</a>
          <a href="#nosotros" className="hover:text-[#fbd862]">NOSOTROS</a>
          <a href="#contacto" className="hover:text-[#fbd862]">CONTACTO</a>
        </nav>

        {/* Íconos de Redes Sociales */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Menú Móvil - Se despliega cuando está abierto */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-[#1994bf] py-6 text-white">
          <a href="#inicio" className="hover:text-[#fbd862]" onClick={() => setMenuOpen(false)}>INICIO</a>
          <a href="#servicios" className="hover:text-[#fbd862]" onClick={() => setMenuOpen(false)}>SERVICIOS</a>
          <a href="#nosotros" className="hover:text-[#fbd862]" onClick={() => setMenuOpen(false)}>NOSOTROS</a>
          <a href="#contacto" className="hover:text-[#fbd862]" onClick={() => setMenuOpen(false)}>CONTACTO</a>

          {/* Íconos de Redes Sociales en Móvil */}
          <div className="flex items-center space-x-4 mt-4">
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
        </nav>
      )}
    </header>
  );
}
