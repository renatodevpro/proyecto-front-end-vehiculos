import { useEffect, useState } from 'react'
import { HStack, Box, Heading, Text, VStack, Button, Select, Input, ButtonGroup } from '@chakra-ui/react'
import type { Vehiculos } from '../../module/vehiculosTipo'
import { getVehiculos } from '../../services/VehiculosServices'
import VehiculosCard from './componentes/VehiculosCard'
import NavLayout from '../../layouts/NavLayout'

const VehiculosPage = () => {
    const [products, setProducts] = useState<Vehiculos>([])
    const [inicio, setInicio] = useState(0)
    const [marca, setMarca] = useState('')

    useEffect(() => {
        const getProducts = async () => {
            const data = await getVehiculos()
            setProducts(data)
        }

        getProducts()
    }, [])

    const autosVisibles = products.slice(inicio, inicio + 6)

    const siguiente = () => {
        if (inicio + 6 < products.length) {
            setInicio(inicio + 6)
        }
    }

    const anterior = () => {
        if (inicio - 6 >= 0) {
            setInicio(inicio - 6)
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMarca(event.target.value)
    }

    const autosFiltrados = marca ? products.filter((p) => p.marca === marca) : products
    return (
        <NavLayout>
            <Box bg="gray.900" color="white" minH="100vh" py="40px" px="20px">
                <HStack align="start">
                    <VStack align="start">
                        <Heading>Filtros</Heading>
                        <VStack align="start" bgColor="gray.800" padding="20px" gap="2em">
                            <VStack align="start">
                                <Text fontWeight="bold">Browse Our Premium Inventory Selection</Text>
                                <Text color="gray" fontStyle="italic">{autosFiltrados.length} In Stock</Text>
                                <HStack>
                                    <Input placeholder="Buscar por modelo" />
                                    <Button colorScheme="purple">Buscar</Button>
                                </HStack>
                            </VStack>
                            <VStack>
                                <Text color="gray" fontStyle="italic">Selecciona una marca para filtrar los vehículos</Text>
                                <Select value={marca} onChange={handleSelectChange}>
                                    <option>Bentley</option>
                                    <option>BMW</option>
                                    <option>Ferrari</option>
                                    <option>Mercedes</option>
                                </Select>
                            </VStack>
                            <VStack align="start">
                                <Text color="gray" fontStyle="italic">Selecciona Cantidad de Puertas</Text>
                                <ButtonGroup>
                                    <Button colorScheme="purple" variant="outline">1</Button>
                                    <Button colorScheme="purple" variant="outline">2</Button>
                                    <Button colorScheme="purple" variant="outline">3</Button>
                                    <Button colorScheme="purple" variant="outline">4</Button>
                                </ButtonGroup>
                            </VStack>
                        </VStack>
                    </VStack>
                    <VStack spacing={8} maxW="1200px" m="0 auto">
                        <VStack spacing={2} textAlign="center">
                            <Heading size="xl">Catálogo de Vehículos</Heading>
                            <Text fontSize="sm" color="gray.400">
                                Explora nuestra flota exclusiva de vehículos disponibles para compra inmediata.
                            </Text>
                        </VStack>

                        <HStack flexWrap="wrap" gap="2em" justifyContent="center" w="100%">
                            {
                                autosFiltrados.map((p) => (
                                    <VehiculosCard key={p.id} product={p} />
                                ))
                            }
                        </HStack>

                        <HStack spacing={4} pt="20px">
                            <Button
                                colorScheme="purple"
                                variant="outline"
                                onClick={anterior}
                                isDisabled={inicio === 0}
                            >
                                Anterior
                            </Button>

                            <Button
                                colorScheme="purple"
                                onClick={siguiente}
                                isDisabled={inicio + 6 >= products.length}
                            >
                                Siguiente
                            </Button>
                        </HStack>
                    </VStack>
                </HStack>
            </Box>
        </NavLayout>
    )
}

export default VehiculosPage