import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar.tsx";
import TopBar from "./component/topbar.tsx";
import Dashboard from "./Pages/DashBoard.tsx";


const App = () => {
    return (
        <Router>
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-64">
                    <Sidebar/>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* TopBar */}
                    <div className="sticky top-0 z-20 bg-white shadow-md">
                        <TopBar />
                    </div>

                    {/* Main Dashboard Content */}
                    <main className="p-6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />

                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App; // Corrected export statement
