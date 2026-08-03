import { Box, HStack, Text, Button, VStack, Heading, Image } from "@chakra-ui/react"
import NavLayout from "../layouts/NavLayout"

const Home = () => {
  return (
    <NavLayout>
      <Box>
        <VStack
          alignItems="start"
          height="400px"
          bgImage="https://images.pexels.com/photos/15097792/pexels-photo-15097792.jpeg"
          bgPos="center"
          bgSize="cover"
          justifyContent="flex-end"
          padding="4em"
        >
          <Heading color="white">Carros de lujo a solo un click</Heading>
          <Text color="red.300" fontWeight="bold">
            Nos encargamos de llevártelo a la puerta de tu casa
          </Text>
          <Button colorScheme="purple" size="md">
            Cotiza hoy
          </Button>
        </VStack>
      </Box>


      <VStack spacing={8} my={12}>
        <VStack textAlign="center">
          <Heading size="lg">Servicios Lux Cars</Heading>
          <Text color="gray.600">¿Cómo podemos ayudarte?</Text>
        </VStack>

        <VStack spacing={6} textAlign="center">
          <HStack spacing={6} wrap="wrap" justifyContent="center">
            <Box
              height="300px"
              width="300px"
              bgImg="https://images.pexels.com/photos/27951446/pexels-photo-27951446.jpeg"
              bgSize="cover"
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <Text
                position="absolute"
                bottom={0}
                w="full"
                bgColor="blackAlpha.800"
                color="white"
                py={2}
                fontWeight="semibold"
              >
                Vehículos Nuevos
              </Text>
            </Box>
            <Box
              bgColor="blue.100"
              height="300px"
              width="300px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              fontWeight="bold"
            >
              Solicitud de repuestos
            </Box>
          </HStack>

          <HStack spacing={6} wrap="wrap" justifyContent="center">
            <Box
              bgColor="blue.100"
              height="300px"
              width="300px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              fontWeight="bold"
            >
              Cita de Servicios
            </Box>
            <Box
              bgColor="blue.100"
              height="300px"
              width="300px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              fontWeight="bold"
            >
              Latonería y Pintura
            </Box>
            <Box
              bgColor="blue.100"
              height="300px"
              width="300px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              fontWeight="bold"
            >
              Póliza de seguros
            </Box>
          </HStack>
        </VStack>
      </VStack>


      <VStack spacing={8} my={12}>
        <VStack textAlign="center">
          <Heading size="lg">Concesionario Lux Cars</Heading>
          <Text color="gray.600">
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
            <Text color="gray.700" textAlign="justify">
              En Lux Cars nos dedicamos a la comercialización e importación de vehículos de alta gama, ofreciendo una experiencia de compra personalizada y transparente para nuestros clientes.
            </Text>
            <Text color="gray.700" textAlign="justify">
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
    </NavLayout>
  );
};

export default Home;