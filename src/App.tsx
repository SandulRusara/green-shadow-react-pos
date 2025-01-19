import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import {Login} from "./pages/Login.tsx";
import {Register} from "./pages/Register.tsx";
import {RootLayout} from "./components/RootLayout.tsx";

import {Field} from "./pages/Field.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Crop} from "./pages/Crop.tsx";
import {Staff} from "./pages/Staff.tsx";
import {Equipment} from "./pages/Equipment.tsx";
import {Log} from "./pages/Log.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";



function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/field", element: <Field /> },
                { path: "/crop", element: <Crop /> },
                { path: "/staff", element: <Staff /> },
                { path: "/equipment", element: <Equipment /> },
                { path: "/log", element: <Log /> },
                { path: "/vehicle", element: <Vehicle /> },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routes}></RouterProvider>
        </>
    );
}

export default App;
