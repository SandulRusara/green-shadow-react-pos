const TopBar = () => {
    return (
        <div className="bg-gray-100 px-4 py-3 flex justify-between items-center shadow-md">
            {/* Sidebar Toggle Button for Small Screens */}
            <button
                className="text-gray-700 text-xl md:hidden focus:outline-none"
                id="toggleSidebar"
            >
                ☰
            </button>

            {/* Welcome Text */}
            <h4 className="text-lg font-semibold text-gray-800">
                Welcome to <span className="text-green-600">Green Shadow</span>
            </h4>

            {/* Logout Button */}
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                id="logOutBtn"
            >
                Logout
            </button>
        </div>
    );
};

export default TopBar;
