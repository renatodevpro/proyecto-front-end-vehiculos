import type { FC } from 'react'
import { Button, Heading, Image, Link, Tag, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { Vehiculo } from '../../../module/vehiculosTipo'

interface ProductCardType {
  product: Vehiculo
}

const VehiculosCard: FC<ProductCardType> = ({ product }) => {
  return (
    <VStack 
      w='320px' 
      borderRadius='20px' 
      align='start'
      outline='1px solid' 
      outlineColor='purple.200' 
      p='1em'
    >
      <Image m='0 auto' w='130px' src={product.foto} />
      
      <Heading size='sm' as='h3'>
        <Link as={RouterLink} to={`/vehiculos/${product.id}`}>
          {product.modelo}
        </Link>
      </Heading>
      
      <Tag colorScheme='purple'>{product.marca}</Tag>
      <Text as='p' fontSize='xs'>{product.caracteristicas}</Text>
      <Text as='p' fontSize='xl' fontWeight='bold'>${product.precio}</Text>
      
      <Button 
        size='sm' 
        colorScheme='purple' 
        as={RouterLink} 
        to={`/${product.id}/pasareladepagos`}
      >
        Comprar Vehiculo
      </Button>
    </VStack>
  )
}

export default VehiculosCard