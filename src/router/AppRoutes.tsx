import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Vehiculos from '../pages/Vehiculos/Vehiculos'
import Login from '../pages/login/Login'
import DetallesVehiculos from '../pages/detallesVehiculos/DetallesVehiculos'
import RutasPrivadas from './outlets/RutasPrivadas'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vehiculos' element={<Vehiculos />} />
            <Route path='/login' element={<Login />} />
            <Route element={<RutasPrivadas/>}>
                <Route path='/detallesvehiculos' element={<DetallesVehiculos />} />
            </Route>
        </Routes>

    )
}

export default AppRoutes