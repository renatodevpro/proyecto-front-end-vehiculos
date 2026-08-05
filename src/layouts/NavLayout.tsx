import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"

const NavLayout = ({ children }: {children:ReactNode} ) => {
const location = useLocation()
console.log(location.pathname)
  return (
    <>
      <HStack justifyContent="space-around" bgColor="blackAlpha.900" color="white">
        <Text>Lux Cars</Text>
        <HStack gap="20px">
          <Link as={RouterLink} to='/' _hover={{ backgroundColor: 'purple.500' }} p="20px" backgroundColor={location.pathname === '/' ? 'purple.500' : undefined}>Inicio</Link>
          <Link as={RouterLink} to="/vehiculos" _hover={{ backgroundColor: 'purple.500' }} p="20px" backgroundColor={location.pathname === '/vehiculos' ? 'purple.500' : undefined}>Vehiculos</Link>
          <Link as={RouterLink} to="/contactanos" _hover={{ backgroundColor: 'purple.500' }} p="20px" backgroundColor={location.pathname === '/contactanos' ? 'purple.500' : undefined}>Contactanos</Link>
          <Link as={RouterLink} to="/login" _hover={{ backgroundColor: 'purple.500' }} p="20px" backgroundColor={location.pathname === '/login' ? 'purple.500' : undefined}>Log in</Link>
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
