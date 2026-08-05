import { useEffect, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import NavLayout from '../../layouts/NavLayout'
import type { Vehiculo } from '../../module/vehiculosTipo'
import { getVehicleById } from '../../services/VehiculosServices'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)

const DetallesVehiculos = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState<Vehiculo>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    const cargarVehiculo = async () => {
      setIsLoading(true)
      setError('')
      setVehicle(undefined)

      const vehicleId = Number(id)
      if (!id || !Number.isInteger(vehicleId)) {
        setError('El identificador del vehículo no es válido.')
        setIsLoading(false)
        return
      }

      try {
        const data = await getVehicleById(vehicleId)

        if (!isActive) return
        if (!data) {
          setError('No encontramos el vehículo que estás buscando.')
          return
        }

        setVehicle(data)
      } catch {
        if (isActive) {
          setError('No fue posible cargar la información del vehículo.')
        }
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    cargarVehiculo()

    return () => {
      isActive = false
    }
  }, [id])

  return (
    <NavLayout>
      <Box bg="gray.900" color="white" minH="100vh" px={{ base: 5, md: 8 }} py={{ base: 8, md: 12 }}>
        <Box maxW="1100px" mx="auto">
          <Button
            mb={8}
            size="sm"
            variant="ghost"
            color="gray.200"
            onClick={() => navigate('/vehiculos')}
            _hover={{ bg: 'gray.800', color: 'purple.300' }}
          >
            ← Volver a vehículos
          </Button>

          {isLoading && (
            <VStack minH="420px" justify="center" spacing={4}>
              <Spinner color="purple.300" size="xl" thickness="4px" />
              <Text color="gray.400">Cargando detalles del vehículo...</Text>
            </VStack>
          )}

          {!isLoading && error && (
            <VStack minH="420px" justify="center" textAlign="center" spacing={5}>
              <Heading size="lg">Vehículo no disponible</Heading>
              <Text color="gray.400">{error}</Text>
              <Button colorScheme="purple" onClick={() => navigate('/vehiculos')}>
                Ver catálogo
              </Button>
            </VStack>
          )}

          {!isLoading && vehicle && (
            <VStack spacing={{ base: 8, md: 12 }} align="stretch">
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }}>
                <Image
                  src={vehicle.foto}
                  alt={`${vehicle.marca} ${vehicle.modelo}`}
                  w="100%"
                  h={{ base: '280px', md: '420px' }}
                  objectFit="cover"
                  borderRadius="xl"
                  bg="gray.800"
                />

                <VStack align="stretch" spacing={6} justify="center">
                  <HStack spacing={3} flexWrap="wrap">
                    <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
                      {vehicle.condicion}
                    </Badge>
                    <Badge colorScheme={vehicle.stockUnidades > 0 ? 'green' : 'red'} px={3} py={1} borderRadius="full">
                      {vehicle.disponibilidad}
                    </Badge>
                  </HStack>

                  <Box>
                    <Text color="purple.300" fontWeight="semibold" mb={1}>{vehicle.marca}</Text>
                    <Heading as="h1" size="2xl">{vehicle.modelo}</Heading>
                    <Text color="gray.400" mt={2}>{vehicle.anio} · {vehicle.tipoCarroceria}</Text>
                  </Box>

                  <Text color="gray.300" lineHeight="tall">{vehicle.descripcion}</Text>
                  <Divider borderColor="gray.700" />

                  <Box>
                    {vehicle.descuentoPorcentaje > 0 && (
                      <Text color="gray.500" textDecoration="line-through">{formatPrice(vehicle.precio)}</Text>
                    )}
                    <Heading size="xl" color="purple.200">{formatPrice(vehicle.precioFinal)}</Heading>
                    {vehicle.financiamientoDisponible && (
                      <Text color="gray.400" fontSize="sm" mt={2}>
                        Financiamiento desde {formatPrice(vehicle.cuotaMensualEstimada)} al mes
                      </Text>
                    )}
                  </Box>

                  <Button
                    colorScheme="purple"
                    size="lg"
                    w={{ base: '100%', sm: 'fit-content' }}
                    onClick={() => navigate(`/${vehicle.id}/pasareladepagos`)}
                  >
                    Comprar vehículo
                  </Button>
                </VStack>
              </SimpleGrid>

              <Box bg="gray.800" border="1px solid" borderColor="gray.700" borderRadius="xl" p={{ base: 5, md: 8 }}>
                <Heading size="md" mb={6}>Especificaciones principales</Heading>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                  {[
                    ['Motor', vehicle.motor],
                    ['Potencia', `${vehicle.potenciaHP} HP`],
                    ['Transmisión', vehicle.transmision],
                    ['Tracción', vehicle.traccion],
                    ['0 a 100 km/h', `${vehicle.aceleracion0a100} s`],
                    ['Velocidad máxima', `${vehicle.velocidadMaximaKmh} km/h`],
                    ['Kilometraje', `${vehicle.kilometraje.toLocaleString()} km`],
                    ['Color', vehicle.color],
                  ].map(([label, value]) => (
                    <Box key={label}>
                      <Text fontSize="xs" color="gray.500" textTransform="uppercase" fontWeight="bold">{label}</Text>
                      <Text mt={1} fontWeight="medium">{value}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>

              <Box>
                <Heading size="md" mb={5}>Equipamiento destacado</Heading>
                <Wrap spacing={3}>
                  {vehicle.caracteristicas.map((feature) => (
                    <WrapItem key={feature}>
                      <Badge bg="gray.800" color="gray.200" borderRadius="md" px={3} py={2} textTransform="none">
                        {feature}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </VStack>
          )}
        </Box>
      </Box>
    </NavLayout>
  )
}

export default DetallesVehiculos
