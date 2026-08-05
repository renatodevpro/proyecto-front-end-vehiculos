import { Navigate, Outlet } from 'react-router-dom';

const LoginOutlet = () => {
    const acceso = localStorage.getItem('dataUsuario');

    return (
        acceso ? <Navigate to='/' replace /> : <Outlet />
    );
};

export default LoginOutlet;