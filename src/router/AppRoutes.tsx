import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Vehiculos from '../pages/Vehiculos/Vehiculos';
import Login from '../pages/login/Login';
import Contactanos from '../pages/Contacto/Contactanos';
import DetallesVehiculos from '../pages/detallesVehiculos/DetallesVehiculos';
import PasarelaDePagos from '../pages/pasarelaDePagos/PasarelaDePagos';
import RutasPrivadas from './outlets/RutasPrivadas';
import LoginOutlet from './outlets/LoginOutlet';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contactanos' element={<Contactanos />} />
            <Route element={<RutasPrivadas />}>
                <Route path='/vehiculos/:id' element={<DetallesVehiculos />} />
                <Route path='/vehiculos' element={<Vehiculos />} />
                <Route path='/:id/pasareladepagos' element={<PasarelaDePagos />} />
            </Route>
            <Route element={<LoginOutlet />}>
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;