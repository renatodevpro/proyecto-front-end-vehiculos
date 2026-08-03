import { Button, FormControl, FormLabel, Heading, HStack, Input, VStack } from "@chakra-ui/react"
import { signIn } from "../../services/VehiculosServices"
import NavLayout from "../../layouts/NavLayout"
interface datosFormulario {username:string
    password:string
}

const Login = () => {

    const dummyLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formulario = e.currentTarget
        const formData = new FormData(formulario)
        const data = Object.fromEntries(formData) as unknown as datosFormulario

        const result = await signIn(data.username, data.password)
        localStorage.setItem('dataUsuario', JSON.stringify(result))
        console.log(result)
    }

  return (
    <NavLayout>
    <HStack height='100vh'>
        <VStack as='form' onSubmit={(e) => dummyLogin(e)} width='50%' height='100%' bgColor='orange'>
            <Heading bgColor='lightblue'>Lux Cars Log in</Heading>
            <FormControl>
                <FormLabel>Correo Electronico</FormLabel>
                <Input name='username' />
            </FormControl>
              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input name='password' />
            </FormControl>

            <Button type='submit'>Iniciar Sesion</Button>
        </VStack>
        
        <VStack width='50%' height='100%' bgColor='pink.100' alignItems= 'end' p='50px' >
             <Heading size='lg' bgColor='lightblue'>Lux Cars</Heading>

        </VStack>
    </HStack>
    </NavLayout>
  )
}

export default Login
