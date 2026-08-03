import { Navigate, Outlet } from 'react-router-dom'

const RutasPrivadas = () => {
    const acceso = localStorage.getItem('dataUsuario')

    return (
        acceso ?<Outlet /> : <Navigate to='/login' />
    )
}

export default RutasPrivadas