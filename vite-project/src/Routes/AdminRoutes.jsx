import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Ajusta la ruta según sea necesario
import AdminPanel from "./AdminPanel";

const AdminRoutes = () => {
    const { isLoggedIn, logout, user } = useAuth();
    // Verifica si el rol del usuario es ADMIN
    const userLocalStorage = localStorage.getItem("user");
    if (userLocalStorage) {
        // Convertir el JSON string a un objeto JavaScript
        const userData = JSON.parse(userLocalStorage);
        console.log(userData.role[0]);
        const isAdmin = userData.role[0];

        // console.log(userLocalStorage.role[0]

        // Verifica si el usuario es admin

        if (userLocalStorage && isAdmin == "ADMIN") {
            console.log("Vos sos usuario,  podes entrar");

            return <AdminPanel />; // Renderiza el contenido de la ruta protegida
        } else {
            console.log("Vos sos usuario, no podes entrar");

            return <Navigate to="/" />; // Redirige al login si no es admin
        }
    } else {
        return <Navigate to="/" />; // Redirige al login si no existe el user en el local storage
    }
};

export default AdminRoutes;
