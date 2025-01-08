interface ServiceCardProps {
    title: string;
    description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-green-600">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
}
