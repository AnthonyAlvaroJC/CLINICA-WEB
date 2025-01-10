import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
    return (
        <>
            <Head>
                <title>Regenera Center</title>
                <meta name="description" content="Conecta salud y belleza en Regenera Center." />
                <link rel="icon" href="/favicon.ico.png" />
            </Head>
            <Header />
            <main className="snap-y snap-mandatory">
                <section id="inicio" className="snap-start">
                    <Hero />
                </section>
                <section id="servicios" className="snap-start">
                    <Services />
                </section>
                <section id="nosotros" className="snap-start">
                    <AboutUs />
                </section>
                <section id="contacto" className="snap-start">
                    <Contact />
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
