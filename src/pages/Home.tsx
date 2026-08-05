import { Box, HStack, Text, Button, VStack, Heading, Image } from "@chakra-ui/react"
import NavLayout from "../layouts/NavLayout"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css"

const Home = () => {
  return (
    <NavLayout>
      <Box height="400px" margin="0 auto" position="relative">
        <Splide options={{ autoplay: true, interval: 3000, type: "loop" }} aria-label="My Favorite Images">
          <SplideSlide>
            <Box height="400px" bgImage="https://images.pexels.com/photos/15097792/pexels-photo-15097792.jpeg" bgPos="center" bgSize="cover" />
          </SplideSlide>
          <SplideSlide>
            <Box height="400px" bgImage="https://images.pexels.com/photos/37147588/pexels-photo-37147588.jpeg" bgPos="center" bgSize="cover" />
          </SplideSlide>
          <SplideSlide>
            <Box height="400px" bgImage="https://images.pexels.com/photos/5488732/pexels-photo-5488732.jpeg" bgPos="center" bgSize="cover" />
          </SplideSlide>
        </Splide>
        <VStack alignItems="start" justifyContent="end" padding="4em" position="absolute" bottom="0" bgColor="blackAlpha.300" width="100%" height="100%">
          <Heading color="white">Carros de lujo a solo un click</Heading>
          <Text color="red">Nos encargamos de llevartelo a la puerta de tu casa</Text>
          <Button bgColor="gray">Cotiza hoy</Button>
        </VStack>
      </Box>
      <VStack bg="gray.900" color= "white">
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
                <Box height="300px" width="300px" bgImg="https://images.pexels.com/photos/34941541/pexels-photo-34941541.jpeg" bgSize="cover">
                <Text bgColor="black" color="white" >Polizas de Seguros</Text>
              </Box>
            </HStack>
            <HStack gap="25px">
                <Box height="300px" width="300px" bgImg="https://images.pexels.com/photos/12066287/pexels-photo-12066287.jpeg" bgSize="cover">
                <Text bgColor="black" color="white" >Renta de Vehiculos</Text>
              </Box>
                <Box height="300px" width="300px" bgImg="https://images.pexels.com/photos/14217531/pexels-photo-14217531.jpeg" bgSize="cover">
                <Text bgColor="black" color="white" >Partes</Text>
              </Box>
                <Box height="300px" width="300px" bgImg="https://images.pexels.com/photos/32256743/pexels-photo-32256743.jpeg" bgSize="cover">
                <Text bgColor="black" color="white" >Pintado de Vehiculos</Text>
              </Box>
            </HStack>
          </VStack>
        </VStack>



        <VStack spacing={8} my={12}>
          <VStack textAlign="center">
            <Heading size="lg">Concesionario Lux Cars</Heading>
            <Text color="white">
              Líderes en servicios de venta y postventa de vehículos de lujo
            </Text>
          </VStack>

          <HStack
            justifyContent="center"
            alignItems="flex-start"
            spacing={10}
            w="90%"
            maxW="1100px"
            wrap={{ base: "wrap", md: "nowrap" }}
          >
            <VStack width={{ base: "100%", md: "50%" }} spacing={6} align="start">
              <Heading size="md">¿Quiénes Somos?</Heading>
              <Text color="white" textAlign="justify">
                En Lux Cars nos dedicamos a la comercialización e importación de vehículos de alta gama, ofreciendo una experiencia de compra personalizada y transparente para nuestros clientes.
              </Text>
              <Text color="white" textAlign="justify">
                Contamos con un equipo altamente capacitado e infraestructura de primer nivel para brindar un servicio postventa excepcional, garantizando que su vehículo permanezca en óptimas condiciones.
              </Text>
              <Button colorScheme="purple" size="md">
                Más sobre nosotros
              </Button>
            </VStack>

            <VStack spacing={0} align="center">
              <Image
                src="https://images.pexels.com/photos/2062555/pexels-photo-2062555.jpeg"
                width="300px"
                height="330px"
                objectFit="cover"
                borderRadius="top-md"
              />
              <Text
                width="300px"
                textAlign="center"
                color="white"
                bgColor="black"
                p={3}
                fontSize="xs"
              >
                Calidad y elegancia garantizada en cada modelo de nuestra flota.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack width="90%" maxW="1100px" margin="0 auto" my={12}>
          <VStack
            bgImage="https://images.pexels.com/photos/10669668/pexels-photo-10669668.jpeg"
            width="100%"
            height="400px"
            bgSize="cover"
            bgPos="center"
            justifyContent="center"
            borderRadius="lg"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              bg="blackAlpha.600"
            />
            <VStack zIndex={1} color="white" spacing={3}>
              <Heading size="xl">Concesionario Lux Cars</Heading>
              <Text fontSize="lg">Venta y Postventa Exclusiva</Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </NavLayout>
  );
};

export default Home;

