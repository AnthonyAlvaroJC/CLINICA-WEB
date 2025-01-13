import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacto() {
    return (
        <>
            <Header />
            <main className="p-8">
                <h1 className="text-4xl font-bold text-center text-[#fbd862]">Contacto</h1>
                <p className="mt-4 text-gray-700 text-center">
                    ¡Nos encantaría saber de ti! Completa el formulario o comunícate directamente con nosotros.
                </p>
            </main>
            <Footer />
        </>
    );
}
