import { Box, Button, Collapse, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const NavLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setSessionVersion] = useState(0);
  const isLoggedIn = Boolean(localStorage.getItem("dataUsuario"));

  const handleSession = () => {
    if (isLoggedIn) {
      localStorage.removeItem("dataUsuario");
      setSessionVersion((version) => version + 1);
      navigate("/");
    }

    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Vehículos", to: "/vehiculos" },
    { label: "Contáctanos", to: "/contactanos" },
  ];

  const linkStyles = {
    px: "16px",
    py: "12px",
    borderRadius: "md",
    transition: "background-color 0.2s ease, color 0.2s ease",
    _hover: { backgroundColor: "whiteAlpha.200", textDecoration: "none" },
  };
  return (
    <>
      <Box
        as="nav"
        position="sticky"
        top="0"
        zIndex="sticky"
        bgColor="blackAlpha.900"
        color="white"
      >
        <HStack
          maxWidth="1100px"
          minHeight="72px"
          margin="0 auto"
          paddingX={{ base: "20px", md: "30px" }}
          justifyContent="space-between"
        >
          <Link
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="wide"
            transition="color 0.2s ease"
            _hover={{ color: "purple.300", textDecoration: "none" }}
          >
            Lux Cars
          </Link>

          <HStack display={{ base: "none", md: "flex" }} gap="8px">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                as={RouterLink}
                to={link.to}
                {...linkStyles}
                backgroundColor={
                  location.pathname === link.to ? "purple.500" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              as={RouterLink}
              to={isLoggedIn ? "/" : "/login"}
              px="18px"
              py="10px"
              marginLeft="8px"
              borderRadius="md"
              backgroundColor="purple.500"
              border="1px solid"
              borderColor="purple.400"
              fontWeight="semibold"
              transition="background-color 0.2s ease, transform 0.2s ease"
              _hover={{
                backgroundColor: "purple.600",
                textDecoration: "none",
                transform: "translateY(-1px)",
              }}
              onClick={handleSession}
            >
              {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </Link>
          </HStack>

          <Button
            display={{ base: "inline-flex", md: "none" }}
            variant="outline"
            colorScheme="whiteAlpha"
            fontSize="2xl"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? "×" : "☰"}
          </Button>
        </HStack>

        <Collapse in={isMenuOpen} animateOpacity>
          <VStack
            display={{ base: "flex", md: "none" }}
            alignItems="stretch"
            padding="0 20px 20px"
            spacing="8px"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                as={RouterLink}
                to={link.to}
                {...linkStyles}
                backgroundColor={
                  location.pathname === link.to ? "purple.500" : undefined
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              as={RouterLink}
              to={isLoggedIn ? "/" : "/login"}
              padding="12px 16px"
              borderRadius="md"
              backgroundColor="purple.500"
              fontWeight="semibold"
              textAlign="center"
              transition="background-color 0.2s ease"
              _hover={{ backgroundColor: "purple.600", textDecoration: "none" }}
              onClick={handleSession}
            >
              {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </Link>
          </VStack>
        </Collapse>
      </Box>

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
