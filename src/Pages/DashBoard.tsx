import Card from "../component/Card.tsx";

const Dashboard = () => {
    const data = [
        { title: 'Total Staff', value: 5 },
        { title: 'Active Reservations', value: 6 },
        { title: 'Total Crops', value: 8 },
        { title: 'Equipment Availability', value: 10 },
        { title: 'Vehicle Availability', value: 3 },
    ];


    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <Card key={index} title={item.title} value={item.value} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
