import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-full w-64 fixed top-0 left-0 flex flex-col shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <img
                    src="../assets/images.jpg"
                    alt="Logo"
                    className="w-16"
                />
                <button
                    id="closeSidebar"
                    className="text-xl font-bold text-gray-400 hover:text-white transition"
                >
                    &times;
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-4 space-y-2 px-4">
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navDashboard"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Dashboard*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navCrops"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Crops*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navFields"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Fields*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navLogs"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Logs*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navEquipment"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Equipment*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navStaff"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Staff*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navVehicle"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    Vehicles*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    id="navUser"*/}
                {/*    className="block py-2 px-3 rounded hover:bg-gray-700 hover:text-green-400"*/}
                {/*>*/}
                {/*    User*/}
                {/*</a>*/}
            </nav>
            <div className="h-full bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Menu</h2>
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="text-lg hover:underline">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/fields" className="text-lg hover:underline">Fields</Link>
                    </li>
                </ul>
            </div>
        </div>


    );
};


export default Sidebar;
