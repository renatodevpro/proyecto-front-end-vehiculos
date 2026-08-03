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
  Text
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/VehiculosServices";

import loginFoto from "../../assets/images/login foto.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username == "" || password == "") {
      toast({
        title: "Campos requeridos",
        description: "Por favor, ingresa tu usuario y contraseña.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

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

        navigate("/vehiculos");
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
      setLoading(false);
    }
  };

  return (
    <HStack height="100vh" spacing={0} bg="gray.900" color="white">
      <VStack
        as="form"
        noValidate
        onSubmit={handleSubmit}
        width={{ base: "100%", md: "40%" }}
        height="100%"
        justifyContent="center"
        px={10}
        spacing={5}
        align="start"
        position="relative"
      >
        <Button 
          variant="ghost" 
          color="white"
          onClick={() => navigate('/')}
          size="sm"
          position="absolute"
          top="20px"
          left="20px"
          _hover={{
            bg: "gray.800",
            color: "purple.300"
          }}
        >
          ← Volver a inicio
        </Button>

        <VStack spacing={2} w="full" align="center" textAlign="center">
          <Heading size="xl">Lux Cars</Heading>
          <Text fontSize="sm" color="gray.400">
            Ingresa tus datos para acceder a nuestro catslogo.
          </Text>
        </VStack>

        <FormControl isRequired>
          <FormLabel fontSize="sm" color="gray.300">Usuario</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
            bg="gray.800"
            borderColor="gray.700"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm" color="gray.300">Contraseña</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            bg="gray.800"
            borderColor="gray.700"
          />
        </FormControl>

        <Button
          type="submit"
          isLoading={loading}
          colorScheme="purple"
          w="full"
          mt={4}
        >
          Iniciar Sesión
        </Button>
      </VStack>

      <Box
        display={{ base: "none", md: "block" }}
        width="60%"
        height="100%"
        bgImage={`url('${loginFoto}')`}
        bgPosition="center"
        bgSize="cover"
      />
    </HStack>
  );
};

export default Login;