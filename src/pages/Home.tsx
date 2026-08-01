import { Box, HStack, Text, Link, Button, VStack, Heading, Image } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Box>
                <HStack justifyContent="space-around">
                    <Text>Lux Cars</Text>
                    <HStack gap="20px">
                        <Link as={RouterLink}>Inicio</Link>
                        <Link as={RouterLink} to="/vehiculos">Vehiculos</Link>
                        <Link as={RouterLink}>Contactanos</Link>
                        <Button as={RouterLink} to="/login" >Log in</Button>
                    </HStack>
                </HStack>
                <VStack alignItems="start" height="400px" bgImage="https://images.pexels.com/photos/15097792/pexels-photo-15097792.jpeg" bgPos="center" bgSize="cover" justifyContent="end" padding="4em">
                    <Heading color="white">Carros de lujo a solo un click</Heading>
                    <Text color="red">Nos encargamos de llevartelo a la puerta de tu casa</Text>
                    <Button bgColor="gray">Cotiza hoy</Button>
                </VStack>
            </Box>

            <VStack gap="50px" margin="50px">
                <VStack>
                    <Heading size="lg">Servicios Lux Cars</Heading>
                    <Text>¿Como podemos ayudarte? </Text>
                </VStack>
                <VStack gap="40px" textAlign="center">
                    <HStack gap="25px">
                        <Box height="300px" width="300px" bgImg="https://images.pexels.com/photos/27951446/pexels-photo-27951446.jpeg" bgSize="cover">
                            <Text bgColor="black" color="white" >Vehiculos Nuevos</Text>
                        </Box>
                        <Box bgColor="blue.200" height="300px" width="300px">Solicitud de repuestos</Box>
                    </HStack>
                    <HStack gap="25px">
                        <Box bgColor="blue.200" height="300px" width="300px">Cita de Servicios</Box>
                        <Box bgColor="blue.200" height="300px" width="300px">Latoneria y Pintura</Box>
                        <Box bgColor="blue.200" height="300px" width="300px">Poliza de seguros</Box>
                    </HStack>
                </VStack>
            </VStack>

            <VStack>
                <VStack>
                    <Heading size="lg">Concesionario Lux Car</Heading>
                    <Text>Lideres en servicios de venta y postvemta de vehiculos de lujo</Text>
                </VStack>
                <HStack justifyContent="center">
                    <VStack width="50%" gap="25px" >
                        <Heading size="md">Quienes Somos?</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero incidunt magni. Illum, quaerat. Dolorum nulla eligendi molestiae recusandae, fuga inventore debitis obcaecati est molestias eos quaerat! Excepturi necessitatibus ipsa laudantium eveniet corporis sequi placeat, molestias, tempore qui laborum dolor.</Text>

                        <Text>Reprehenderit cumque cum esse architecto molestiae aperiam expedita, tempora officiis suscipit dolorem doloribus maxime. Consequatur voluptatibus, odit, ut fugit nobis delectus adipisci id dolorem eaque fuga neque omnis. Perferendis architecto atque nobis expedita quisquam, saepe harum porro quidem consequatur magnam optio, ullam numquam perspiciatis nihil nemo tenetur quos vero ab. Accusantium aperiam praesentium laboriosam eum iure hic incidunt blanditiis mollitia!</Text>
                        <Button bgColor="gray">Mas sobre nosotros</Button>
                    </VStack>
                    <VStack gap="0">
                        <Image src="https://images.pexels.com/photos/2062555/pexels-photo-2062555.jpeg" width="300px" height="330px" />
                        <Text width="300px" textAlign="center" color="white" bgColor="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat.</Text>
                    </VStack>
                </HStack>
            </VStack>

            <VStack width="80%" margin="0 auto">
                <VStack bgImage="https://images.pexels.com/photos/10669668/pexels-photo-10669668.jpeg" width="100%" height="600px" bgSize="cover">
                    <Heading>Consecionario Lux Cars</Heading>
                    <Text>Venta y postventa</Text>
                    </VStack>
                <HStack>
                    <VStack></VStack>
                </HStack>
            </VStack>



        </>


    )
}

export default Home
