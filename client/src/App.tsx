import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <> Home </> }, //TODO: Home
    { path: "/signup", element: <SignUp/> },
    { path: "/login", element: <Login/> }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
