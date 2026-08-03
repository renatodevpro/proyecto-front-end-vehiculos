import { FormControl, FormLabel, HStack, Image, Input, VStack } from "@chakra-ui/react"
import imagenesTarjetas from "../../assets/Gemini_Generated_Image_w85m5w85m5w85m5w.png"
const PasarelaDePagos = () => {
    return (

        <VStack as='form' padding="10px">
            <VStack align="start" width='100%'>
                <FormControl>
                    <FormLabel>Numero de Tarjeta</FormLabel>
                    <Input />
                </FormControl>
                <Image width="200px" src={imagenesTarjetas} />
            </VStack>
            <HStack width='100%'>
                <FormControl>
                    <FormLabel>Expiracion(MM/YY)</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>Numero de Seguridad</FormLabel>
                    <Input />
                </FormControl>
            </HStack>
            <FormControl>
                <FormLabel>Nombre en la Tarjeta</FormLabel>
                <Input/>
            </FormControl>
        </VStack>

    )
}

export default PasarelaDePagos
