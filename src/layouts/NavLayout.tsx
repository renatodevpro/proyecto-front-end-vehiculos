import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <HStack
        justifyContent="space-around"
        bgColor="blackAlpha.900"
        color="white"
      >
        <Text>Lux Cars</Text>
        <HStack gap="20px">
          <Link
            as={RouterLink}
            to="/"
            _hover={{ backgroundColor: "purple.500" }}
            p="20px"
            backgroundColor={
              location.pathname === "/" ? "purple.500" : undefined
            }
          >
            Inicio
          </Link>
          <Link
            as={RouterLink}
            to="/vehiculos"
            _hover={{ backgroundColor: "purple.500" }}
            p="20px"
            backgroundColor={
              location.pathname === "/vehiculos" ? "purple.500" : undefined
            }
          >
            Vehiculos
          </Link>
          <Link
            as={RouterLink}
            to="/contactanos"
            _hover={{ backgroundColor: "purple.500" }}
            p="20px"
            backgroundColor={
              location.pathname === "/contactanos" ? "purple.500" : undefined
            }
          >
            Contactanos
          </Link>
          <Link
            as={RouterLink}
            to="/login"
            _hover={{ backgroundColor: "purple.500" }}
            p="20px"
            backgroundColor={
              location.pathname === "/login" ? "purple.500" : undefined
            }
          >
            Log in
          </Link>
        </HStack>
      </HStack>

      {children}

      <VStack
        as="footer"
        bgColor="blackAlpha.900"
        color="white"
        padding={{ base: "30px 20px", md: "50px" }}
        spacing="30px"
      >
        <HStack
          width="100%"
          maxWidth="1100px"
          justifyContent="space-between"
          alignItems="start"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "30px", md: "50px" }}
        >
          <VStack alignItems="start" maxWidth="300px">
            <Text fontWeight="bold" fontSize="xl">Lux Cars</Text>
            <Text color="gray.400">
              Elegancia, rendimiento y exclusividad sobre ruedas.
            </Text>
          </VStack>

          <VStack alignItems="start">
            <Text fontWeight="bold">ENLACES</Text>
            <Link as={RouterLink} to="/" _hover={{ color: "purple.300" }}>
              Inicio
            </Link>
            <Link
              as={RouterLink}
              to="/vehiculos"
              _hover={{ color: "purple.300" }}
            >
              Vehículos
            </Link>
            <Link
              as={RouterLink}
              to="/contactanos"
              _hover={{ color: "purple.300" }}
            >
              Contáctanos
            </Link>
          </VStack>

          <VStack alignItems="start">
            <Text fontWeight="bold">CONTACTO</Text>
            <Text color="gray.400">Lima, Perú</Text>
            <Text color="gray.400">ventas@luxcars.com</Text>
            <Text color="gray.400">+51 999 999 999</Text>
          </VStack>

          <VStack alignItems="start">
            <Text fontWeight="bold">HORARIO</Text>
            <Text color="gray.400">Lunes a sábado</Text>
            <Text color="gray.400">9:00 a. m. – 6:00 p. m.</Text>
          </VStack>
        </HStack>

        <Text
          width="100%"
          maxWidth="1100px"
          borderTop="1px solid"
          borderColor="whiteAlpha.300"
          paddingTop="20px"
          textAlign="center"
          color="gray.400"
          fontSize="sm"
        >
          © {new Date().getFullYear()} Lux Cars. Todos los derechos reservados.
        </Text>
      </VStack>
    </>
  );
};

export default NavLayout;
