import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"

const NavLayout = ({ children }: {children:ReactNode} ) => {
  return (
    <>
      <HStack justifyContent="space-around" bgColor="blackAlpha.900" color="white">
        <Text>Lux Cars</Text>
        <HStack gap="20px">
          <Link as={RouterLink} to='/'>Inicio</Link>
          <Link as={RouterLink} to="/vehiculos">Vehiculos</Link>
          <Link as={RouterLink} to="/contactanos">Contactanos</Link>
          <Button as={RouterLink} to="/login" >Log in</Button>
        </HStack>
      </HStack>

      {children}

      <HStack justifyContent="center" gap="20px" bgColor="blackAlpha.900" color="white" padding="50px">
        <VStack>
            <Text fontWeight="bold" >VENTA Y POST VENTA</Text>
            <Text>Vehiculos</Text>
            <Text>Quienes Somos</Text>
            <Text>Preguntas Frecuentos</Text>
        </VStack>
         <VStack>
          <Text fontWeight="bold" >SERVICIOS</Text>
          <Text>Vehiculos</Text>
            <Text>Quienes Somos</Text>
            <Text>Preguntas Frecuentos</Text>
        </VStack>
         <VStack>
          <Text fontWeight="bold" >CONTACTANOS</Text>
          <Text>Vehiculos</Text>
            <Text>Quienes Somos</Text>
            <Text>Preguntas Frecuentos</Text>
        </VStack>
      </HStack>

      </>
      )
}

      export default NavLayout
