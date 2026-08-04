import { Button, FormControl, FormLabel, Heading, HStack, Image, Input, Text, VStack, Box, useToast } from "@chakra-ui/react"
import imagenesTarjetas from "../../assets/Gemini_Generated_Image_w85m5w85m5w85m5w.png"
import NavLayout from "../../layouts/NavLayout"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVehicleById } from "../../services/VehiculosServices"
import type { Vehiculo } from "../../module/vehiculosTipo"

const PasarelaDePagos = () => {
    const {id} = useParams()
    const navegate = useNavigate()
    const toast = useToast()

    const [vehicle, setVehicle] = useState<Vehiculo>()

    useEffect(() => {
        const CargarVehiculo = async () => {
            const res = await getVehicleById(Number(id))
            setVehicle(res)
        }

        CargarVehiculo()
    }, [id])

    const pagarBotonHandler = (e: any) => {
        e.preventDefault()

        toast({
            title: 'Pago realizado con éxito',
            description: '¡Gracias por su compra! El pago ha sido procesado.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
        })

        setTimeout(() => {
            navegate('/vehiculos')
        }, 1200)
    }

    return (
        <NavLayout>
            <Box bg="gray.900" color="white" minH="100vh" py='20px'>
                <VStack spacing={4} padding="20px" maxWidth="500px" margin="0 auto" align="start">
                    
                    <Button 
                      variant="ghost" 
                      color="white"
                      onClick={() => navegate(-1)}
                      size="sm"
                      _hover={{
                                bg: "gray.800",
                                color: "purple.300"
                            }}
                    >
                        ← Volver a vehiculos
                    </Button>

                    <Heading size="lg" alignSelf="center">Pasarela de Pagos</Heading>

                    {vehicle && (
                        <VStack border="1px solid" borderColor="purple.500" borderRadius="10px" p="15px" width="100%" bg="gray.800" align="start">
                            <Heading size="md" alignSelf="center">{vehicle.marca} {vehicle.modelo}</Heading>
                            <Image width='150px' src={vehicle.foto} margin="0 auto"/>
                            <Text fontSize="xs" color="gray.300">
                              Observaciones: {vehicle.caracteristicas}
                            </Text>
                            <Text fontWeight="bold" color="purple.200">
                              Precio: ${vehicle.precio}
                            </Text>
                        </VStack>
                    )}

                    <VStack as='form' onSubmit={pagarBotonHandler} padding="15px" width="100%" bg="gray.800" borderRadius="10px" border="1px solid" borderColor="gray.700">
                        <VStack align="start" width='100%'>
                            <FormControl>
                                <FormLabel fontSize="sm">Numero de Tarjeta</FormLabel>
                                <Input bg="gray.700" borderColor="gray.600" id="numTarjeta" />
                            </FormControl>
                            <Image width="180px" src={imagenesTarjetas} />
                        </VStack>

                        <HStack width='100%'>
                            <FormControl>
                                <FormLabel fontSize="sm">Expiracion (MM/YY)</FormLabel>
                                <Input bg="gray.700" borderColor="gray.600" />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize="sm">Numero de Seguridad</FormLabel>
                                <Input type="password" bg="gray.700" borderColor="gray.600" />
                            </FormControl>
                        </HStack>

                        <FormControl>
                            <FormLabel fontSize="sm">Nombre en la Tarjeta</FormLabel>
                            <Input bg="gray.700" borderColor="gray.600" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize="sm">Direccion de Envio</FormLabel>
                            <Input bg="gray.700" borderColor="gray.600" />
                        </FormControl>

                        <Button type="submit" colorScheme="purple" width="100%" mt="15px">
                            Pagar ${vehicle?.precio}
                        </Button>
                    </VStack>
                </VStack>
            </Box>
        </NavLayout>
    )
}

export default PasarelaDePagos