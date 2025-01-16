

const FieldPage = () => {
    const fields = [
        { id: 1, name: "Field A", size: "10 acres", crops: "Wheat" },
        { id: 2, name: "Field B", size: "5 acres", crops: "Corn" },
        { id: 3, name: "Field C", size: "8 acres", crops: "Rice" },
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Field Management</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fields.map((field) => (
                    <div key={field.id} className="bg-white shadow-md p-4 rounded-lg">
                        <h2 className="text-xl font-semibold">{field.name}</h2>
                        <p className="text-gray-600">Size: {field.size}</p>
                        <p className="text-gray-600">Crops: {field.crops}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FieldPage;
