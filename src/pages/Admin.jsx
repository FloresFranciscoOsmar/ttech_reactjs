//import { useContext } from "react";
//import { CartContext } from '../context/CartContext';
import coming_soon from '../assets/coming_soon.png'

const Admin = () => {
    
    // Añadir lógica para que si es administrador el usuario, pueda crear un producto
    // como es una ruta protegida, voy a verificar que sea admin el user 
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">
            <p className="text-5xl">
                Iniciaste sesion correctamente
            </p>
            <p className="text-2xl w-3/5 text-center">
                Lamentablemente la página Admin no está implementada, es para crear un producto en un futuro
                <br/>
                Gracias! Vuelva prontos!
            </p>
            <img
                className="w-8/10" 
                src={coming_soon} />
        </div>
    );
}

export default Admin;