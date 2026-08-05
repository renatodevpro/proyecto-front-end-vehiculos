import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";

import NavLayout from "../../layouts/NavLayout";

const Contactanos = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [modeloInteres, setModeloInteres] = useState("");
  const [mensaje, setMensaje] = useState("");


  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const contactosGuardados = JSON.parse(
        localStorage.getItem("contactos_luxcars") || "[]"
      );

      const nuevoContacto = {
        id: Date.now(),
        nombre,
        apellido,
        correo,
        telefono,
        modeloInteres,
        mensaje,
        fechaEnvio: new Date().toLocaleDateString(),
      };

      contactosGuardados.push(nuevoContacto);
      localStorage.setItem("contactos_luxcars", JSON.stringify(contactosGuardados));

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setNombre("");
      setApellido("");
      setCorreo("");
      setTelefono("");
      setModeloInteres("");
      setMensaje("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un problema al guardar la información.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    
    <NavLayout>

      <Box minH="100vh" bg="gray.900" color="white" py={10} px={4}>
        <VStack spacing={6} maxW="700px" mx="auto">
          <VStack spacing={2} textAlign="center">
            <Text fontSize="xs" color="purple.300" fontWeight="bold">
              Atencion Personalizada
            </Text>
            <Heading size="xl">Contactanos</Heading>
            <Text color="gray.400" fontSize="sm">
              Ingresa tus datos a continuación y nos comunicaremos contigo
            </Text>
          </VStack>
          
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="gray.800"
            border="1px solid"
            borderColor="gray.700"
            borderRadius="md"
            p={8}
            w="100%"
          >

            <VStack spacing={4}>
              <HStack spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.300">Nombre</FormLabel>
                  <Input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Roberto"
                    bg="gray.700"
                    borderColor="gray.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.300">Apelido</FormLabel>
                  <Input
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ej. Gomez"
                    bg="gray.700"
                    borderColor="gray.600"
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.300">Correo Electronico</FormLabel>
                  <Input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    bg="gray.700"
                    borderColor="gray.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.300">Telefono / WhatsApp</FormLabel>
                  <Input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+51 999 999 999"
                    bg="gray.700"
                    borderColor="gray.600"
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.300">Modelo o Servicio de Inters</FormLabel>
                <Select
                  value={modeloInteres}
                  onChange={(e) => setModeloInteres(e.target.value)}
                  placeholder="Selecciona una opcin"
                  bg="gray.700"
                  borderColor="gray.600"
                >
                  <option value="deportivos">Vehículos Deportivos</option>
                  <option value="suv">SUV de Lujo</option>
                  <option value="taller">Mantenimiento</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.300">Consulta / Mensaje</FormLabel>
                <Textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escríbenos ¿cómo podemos ayudarte?"
                  rows={4}
                  bg="gray.700"
                  borderColor="gray.600"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                w="full"
                mt={2}
              >
                Enviar Solicitud
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </NavLayout>
  );
};

export default Contactanos;