interface ServiceDetailsProps {
    title: string;
    description: string;
    items: { subtitle: string; content: string; image: string }[];
}

export default function ServiceDetails({ title, description, items }: ServiceDetailsProps) {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col mb-8">
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 p-6">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="mt-2 text-gray-100">{description}</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.subtitle}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-green-700">{item.subtitle}</h3>
                            <p className="text-gray-700 mt-2">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
