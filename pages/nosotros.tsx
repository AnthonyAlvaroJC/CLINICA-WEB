import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Nosotros() {
    return (
        <>
            <Header />
            <main className="p-8">
                <h1 className="text-4xl font-bold text-green-600 text-center">Sobre Nosotros</h1>
                <p className="mt-4 text-gray-700 text-center">
                    En Regenera Center creemos en la conexión armónica entre mente, cuerpo y espíritu. Descubre cómo
                    combinamos medicina estética, regenerativa e integrativa para transformar tu bienestar desde
                    adentro hacia afuera.
                </p>
            </main>
            <Footer />
        </>
    );
}
