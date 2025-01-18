import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar.tsx";

import Dashboard from "./Pages/DashBoard.tsx";
import FieldPage from "./Pages/FieldPage.tsx";
import TopBar from "./component/topbar.tsx";
import Equipment from "./Pages/Equipment.tsx";

const App = () => {
    return (
        <Router>
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-64">
                    <Sidebar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* TopBar */}
                    <div className="sticky top-0 z-20 bg-white shadow-md">
                        <TopBar />
                    </div>

                    {/* Main Content */}
                    <main className="p-6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/fields" element={<FieldPage />} />
                            <Route path="/equipment" element={<Equipment />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;
