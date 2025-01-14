
import './App.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";


function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element:<RootLayOut/>,
            children:[
                {path:'',element:<Dashboard/>},
                {path:'/Field',element:<Field/>},
                {path:'/Crop',element:<Crop/>},
                {path:'/Log',element:<Log/>},
                {path:'/Staff',element:<Staff/>},
                {path:'/Equipment',element:<Equipment/>},
                {path:'/Vehicle',element:<Vehicle/>},
            ]
        }
    ])

  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
