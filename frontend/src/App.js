import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.js";
import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Home/></ProtectedRoute>,
    },
    {
      path: "/register",
      element: <SignUp/>,
    },
    {
      path: "/login",
      element: <SignIn/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
      
}

export default App;
