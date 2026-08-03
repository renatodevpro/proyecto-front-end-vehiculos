import { FormControl, FormLabel, HStack, Image, Input, VStack } from "@chakra-ui/react"
import imagenesTarjetas from "../../assets/Gemini_Generated_Image_w85m5w85m5w85m5w.png"
import NavLayout from "../../layouts/NavLayout"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVehicleById } from "../../services/VehiculosServices"
import type { Vehiculo } from "../../module/vehiculosTipo"
const PasarelaDePagos = () => {
    const {id} = useParams()

    const [vehicle, setVehicle] = useState <Vehiculo> ()

     useEffect(() => {
            const getProducts = async () => {
                const data = await getVehicleById(Number(id))
                setVehicle(data)
            }
    
            getProducts()
        }, [])
    

    return (
        <NavLayout>
            {vehicle?.caracteristicas}
            <Image width='300px' src= {vehicle?.foto}/>
            <VStack as='form' padding="10px">
                <VStack align="start" width='100%'>
                    <FormControl>
                        <FormLabel>Numero de Tarjeta</FormLabel>
                        <Input />
                    </FormControl>
                    <Image width="200px" src={imagenesTarjetas} />
                </VStack>
                <HStack width='100%'>
                    <FormControl>
                        <FormLabel>Expiracion(MM/YY)</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Numero de Seguridad</FormLabel>
                        <Input />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Nombre en la Tarjeta</FormLabel>
                    <Input />
                </FormControl>
            </VStack>
        </NavLayout>
    )
}

export default PasarelaDePagos
