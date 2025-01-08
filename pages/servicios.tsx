import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const servicios = [
    { title: 'Medicina Estética Facial', description: 'Ácido Hialurónico, Botox, Hilos tensores' },
    { title: 'Medicina Estética Corporal', description: 'Mesoterapia Corporal, Criolipólisis, Musculpting' },
    { title: 'Medicina Regenerativa', description: 'PRP, Exosomas, Radiofrecuencia Facial' },
];

export default function Servicios() {
    return (
        <>
            <Header />
            <main className="p-8">
                <h1 className="text-4xl font-bold text-center text-green-600">Servicios</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {servicios.map((servicio, index) => (
                        <ServiceCard key={index} title={servicio.title} description={servicio.description} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
