import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login                                   from "./pages/Login.tsx"
import SignUp                                  from "./pages/SignUp.tsx"
import ProtectedPage                           from "./components/ProtectedPage.tsx";
import Home                                    from "./pages/Home.tsx";


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <ProtectedPage children={ Home }/> },
    { path: "/signup", element: <SignUp/> },
    { path: "/login", element: <Login/> }
  ]);

  return (
      <RouterProvider router={ router }/>
  )
}

export default App
