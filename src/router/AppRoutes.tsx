import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Vehiculos from '../pages/Vehiculos/Vehiculos'
import Login from '../pages/login/Login'
import DetallesVehiculos from '../pages/detallesVehiculos/DetallesVehiculos'
import RutasPrivadas from './outlets/RutasPrivadas'
import PasarelaDePagos from '../pages/pasarelaDePagos/PasarelaDePagos'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route element={<RutasPrivadas />}>
                <Route path='/detallesvehiculos' element={<DetallesVehiculos />} />
                <Route path='/vehiculos' element={<Vehiculos />} />
                <Route path='/:id/pasareladepagos' element={<PasarelaDePagos />} />
            </Route>
        </Routes>

    )
}

export default AppRoutes