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
  Text,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";

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
      // 1. Obtener los contactos guardados en localStorage
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
        fechaEnvio: new Date().toLocaleString("es-PE"),
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
    <Box minH="100vh" bg="#0D1117" color="#FFFFFF" py={{ base: 10, md: 16 }} px={4}>
      <VStack spacing={8} maxW="800px" mx="auto" align="stretch">
        

        <VStack spacing={2} textAlign="center">
          <Text fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#D6BCFA" fontWeight="bold">
            Atencion Personalizada
          </Text>
          <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
            Contactanos
          </Heading>
          <Text color="#A0AEC0" fontSize="sm" maxW="600px">
            Ingresa tus datos a continuación y nos comunicaremos contigo.
          </Text>
        </VStack>


        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="#161B22"
          border="1px solid"
          borderColor="#30363D"
          borderRadius="lg"
          p={{ base: 6, md: 10 }}
          boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.5)"
        >
          <VStack spacing={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              
              <FormControl isRequired>
                <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                  Nombre
                </FormLabel>
                <Input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Roberto"
                  bg="#21262D"
                  color="#FFFFFF"
                  border="1px solid"
                  borderColor="#30363D"
                  size="lg"
                  _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                  Apelido
                </FormLabel>
                <Input
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ej. Gomez"
                  bg="#21262D"
                  color="#FFFFFF"
                  border="1px solid"
                  borderColor="#30363D"
                  size="lg"
                  _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
                />
              </FormControl>

            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              
              <FormControl isRequired>
                <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                  Correo Electrónico
                </FormLabel>
                <Input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  bg="#21262D"
                  color="#FFFFFF"
                  border="1px solid"
                  borderColor="#30363D"
                  size="lg"
                  _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                  Teléfono / WhatsApp
                </FormLabel>
                <Input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+51 ### ### ###"
                  bg="#21262D"
                  color="#FFFFFF"
                  border="1px solid"
                  borderColor="#30363D"
                  size="lg"
                  _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
                />
              </FormControl>

            </SimpleGrid>

            <FormControl>
              <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                Modelo o Servicio de Interés
              </FormLabel>
              <Select
                value={modeloInteres}
                onChange={(e) => setModeloInteres(e.target.value)}
                placeholder="Selecciona una opción"
                bg="#21262D"
                color="#FFFFFF"
                border="1px solid"
                borderColor="#30363D"
                size="lg"
                _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
              >
                <option value="deportivos" style={{ backgroundColor: "#21262D" }}>Vehículos Deportivos</option>
                <option value="suv" style={{ backgroundColor: "#21262D" }}>SUV de Lujo</option>
                <option value="taller" style={{ backgroundColor: "#21262D" }}>Mantenimiento</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="xs" textTransform="uppercase" letterSpacing="widest" color="#CBD5E0">
                Consulta o Mensaje
              </FormLabel>
              <Textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribenos!!! ¿cómo podemos ayudarte?"
                rows={4}
                bg="#21262D"
                color="#FFFFFF"
                border="1px solid"
                borderColor="#30363D"
                _focus={{ borderColor: "#B794F4", bg: "#21262D" }}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              w="full"
              mt={2}
              fontWeight="semibold"
            >
              Enviar Solicitud
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contactanos;