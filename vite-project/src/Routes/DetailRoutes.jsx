/*import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Ajusta la ruta según sea necesario
import AdminPanel from "./AdminPanel";

const DetailRoutes = () => {
    //const { isLoggedIn, logout, user } = useAuth();
    // Verifica si el rol del usuario es ADMIN
    const userLocalStorage = localStorage.getItem("user");

    console.log("Estoy aca");
    

    console.log(userLocalStorage);
    
    if (!userLocalStorage){

        console.log("No estoy logueado, no puedo entrar a el detalle del instrumento");
        

            return <Navigate to="/" />; // Redirige al login si no es esta logeado
        
    } else {
        console.log("Estoy logueado, si puedo entrar a el detalle del instrumento");

        <Route path="/detailview/:id" element={<DetailView />} />
    }
};

export default DetailRoutes;
*/