import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



function RutaProtegida({children}) {
    const { isAuth } = useContext(CartContext)

    
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children ? children : <Outlet />;
}
export default RutaProtegida;