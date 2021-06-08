import React from "react";
import { FaEnvelope, FaLock, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    InputGroup,
    InputLeftElement,
    Center,
    Icon,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';

  import { ToastSuccess } from "../../components/Toast"

  import HeroImage from "../../assets/img/hero-image.svg"
  
  const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isMobile] = useMediaQuery("(min-width: 992px)")

    const colors = {
        primary: "#43419e",
        secondary: "#e44e2b",
        warning: "#e44e2b",
        light: "#f4f3f9",
    }

    function onLogin(value){
      // ToastSuccess(JSON.stringify(value))
      console.log(value)
    }

    let senha = watch("password")
    console.log(senha)
    console.log(errors)

    return (
        <Stack minH={'100vh'} direction={isMobile ? "row" : "column"} bg={colors.light} p={20}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack
              as="form"
              spacing={6}
              w={'full'}
              maxW={'md'}
              sx={{userSelect: "none"}}
              id="form-login"
              onSubmit={handleSubmit(onLogin)}
            >
                <Center>
                    <Heading color={colors.primary} fontSize={'2xl'}>Realize o seu login</Heading>
                </Center>
                <FormControl id="email">
                    <FormLabel>E-mail</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Icon as={FaEnvelope}
                          color="gray.300"
                        />} />
                        <Input
                          type="email"
                          focusBorderColor={colors.primary}
                          placeholder="Digite seu e-mail"
                          {...register("email", { required: true })}
                        />
                    </InputGroup>
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Senha</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Icon as={FaLock}
                          color="gray.300"
                        />} />
                        <Input
                          type="password"
                          focusBorderColor={colors.primary}
                          placeholder="Digite sua senha"
                          {...register("password", { required: true })}
                        />
                    </InputGroup>
                </FormControl>
                <Box
                    as={Button}
                    bg={colors.primary}
                    color="white"
                    _hover={{
                        background: colors.light,
                        color: colors.primary,
                      }}
                    variant={'solid'}
                    leftIcon={<Icon as={FaPaperPlane} color="white.300"/>}
                    mt="20px"
                    form="form-login"
                    type="submit"
                >
                    Logar
                </Box>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              boxSize="100%"
              display={ isMobile ? "block" : "none"}
              src={HeroImage}
              sx={{
                  userSelect: "none"
              }}
            />
          </Flex>
        </Stack>
      );
  }

  export default Login;