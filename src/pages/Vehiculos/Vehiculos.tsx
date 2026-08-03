import { useEffect, useState } from 'react'
import { HStack } from '@chakra-ui/react'
import type { Vehiculos } from '../../module/vehiculosTipo'
import { getVehiculos } from '../../services/VehiculosServices'
import VehiculosCard from './componentes/VehiculosCard'
import NavLayout from '../../layouts/NavLayout'


const VehiculosPage = () => {
    const [products, setProducts] = useState<Vehiculos>([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await getVehiculos()
            setProducts(data)
        }

        getProducts()
    }, [])

    return (
       <NavLayout>
       <HStack flexWrap='wrap' w='1100px' m='0 auto' gap='2em' justifyContent='center'>
            {
                products.map((p) => (
                    <VehiculosCard key={p.id} product={p} />
                ))
            }
        </HStack>
        </NavLayout>
    )
}

export default VehiculosPage

