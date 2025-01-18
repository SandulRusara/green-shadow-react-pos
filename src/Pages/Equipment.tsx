import { useState } from "react";
import Modal from "../component/Modal"; // Assume Modal component is already created
import SaveButton from "../component/SaveButton"; // Assume SaveButton is created
import UpdateButton from "../component/UpdateButton"; // Assume UpdateButton is created

const EquipmentPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        status: "",
        field: "",
        staff: "",
    });
    const [equipmentList, setEquipmentList] = useState([
        // Example equipment data
        { id: 1, name: "Generator", type: "ELECTRICAL", status: "AVAILABLE", field: "Field A", staff: "John Doe" },
        { id: 2, name: "Tractor", type: "MECHANICAL", status: "UNAVAILABLE", field: "Field B", staff: "Jane Smith" },
    ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddEquipment = () => {
        setEquipmentList(prev => [
            ...prev,
            { ...formData, id: prev.length + 1 } // Adding new equipment
        ]);
        setIsModalOpen(false); // Close modal after adding
    };

    const handleUpdateEquipment = () => {
        // Handle equipment update logic
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Equipment Management</h1>
            <div className="flex justify-between mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                    Add Equipment
                </button>
            </div>

            {/* Equipment Table */}
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
                <thead>
                <tr>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Type</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Field</th>
                    <th className="border p-2">Staff</th>
                </tr>
                </thead>
                <tbody>
                {equipmentList.map((equipment) => (
                    <tr key={equipment.id}>
                        <td className="border p-2">{equipment.id}</td>
                        <td className="border p-2">{equipment.name}</td>
                        <td className="border p-2">{equipment.type}</td>
                        <td className="border p-2">{equipment.status}</td>
                        <td className="border p-2">{equipment.field}</td>
                        <td className="border p-2">{equipment.staff}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal for Adding Equipment */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Equipment Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Equipment Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select Equipment Type</option>
                            <option value="ELECTRICAL">Electrical</option>
                            <option value="MECHANICAL">Mechanical</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Equipment Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select Equipment Status</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="UNAVAILABLE">Unavailable</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Relevant Field</label>
                        <select
                            name="field"
                            value={formData.field}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="Field A">Field A</option>
                            <option value="Field B">Field B</option>
                            <option value="Field C">Field C</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Relevant Staff Member</label>
                        <select
                            name="staff"
                            value={formData.staff}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="John Doe">John Doe</option>
                            <option value="Jane Smith">Jane Smith</option>
                            <option value="Michael Brown">Michael Brown</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-4">
                        <SaveButton onClick={handleAddEquipment}>Save Equipment</SaveButton>
                        <UpdateButton onClick={handleUpdateEquipment}>Update Equipment</UpdateButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default EquipmentPage;
