import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
  useToast,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/VehiculosServices";

import loginFoto from "../../assets/images/login foto.jpg";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, ingresa tu usuario y contraseña.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn(username, password);

      if (result && result.accessToken) {

        localStorage.setItem("dataUsuario", JSON.stringify(result));

        toast({
          title: "Inicio de sesión exitoso",
          description: `Bienvenido, ${result.firstName || result.username}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Redirigir a la vista de vehículos
        navigate("/vehiculos");
      } else {
        throw new Error("Respuesta de autenticación no válida.");
      }
    } catch (error: any) {
      toast({
        title: "Error de autenticación",
        description: error.message || "Ocurrió un error al iniciar sesión.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HStack height="100vh" spacing={0} bg="gray.950" color="white">
      {/* Formulario de Login */}
      <VStack
        as="form"
        onSubmit={handleSubmit}
        width={{ base: "100%", md: "50%", lg: "40%", xl: "35%" }}
        height="100%"
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: 6, md: 12, lg: 16 }}
        bg="gray.900"
        spacing={6}
      >
        <VStack align="center" textAlign="center" spacing={2} w="full">
          <Heading size="xl" fontWeight="bold" letterSpacing="tight">
            Lux Cars
          </Heading>
          <Text fontSize="sm" color="gray.400">
            Ingresa tus datos para acceder a nuestro catalogo.
          </Text>
        </VStack>

        <FormControl isRequired>
          <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="gray.300">
            Usuario
          </FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
            bg="gray.800"
            border="1px solid"
            borderColor="gray.700"
            _focus={{ borderColor: "purple.400", bg: "gray.800" }}
            _hover={{ borderColor: "gray.600" }}
            size="lg"
            borderRadius="md"
          />
        </FormControl>

        <FormControl isRequired my={2}>
          <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="gray.300">
            Contraseña
          </FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            bg="gray.800"
            border="1px solid"
            borderColor="gray.700"
            _focus={{ borderColor: "purple.400", bg: "gray.800" }}
            _hover={{ borderColor: "gray.600" }}
            size="lg"
            borderRadius="md"
          />
        </FormControl>

        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Autenticando..."
          colorScheme="purple"
          size="lg"
          w="full"
          mt={2}
          fontWeight="semibold"
          _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
          transition="all 0.2s"
        >
          Iniciar Sesión
        </Button>
      </VStack>

      {/* Imagen lateral donde esta el carro, sino podriamos buscar otra imagen si creen que no esta acorde al diseno web*/}
      <Box
        display={{ base: "none", md: "block" }}
        width={{ md: "50%", lg: "60%", xl: "65%" }}
        height="100%"
        bgImage={`url('${loginFoto}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-r, gray.900 0%, transparent 40%, rgba(0,0,0,0.6) 100%)"
        />
      </Box>
    </HStack>
  );
};

export default Login;