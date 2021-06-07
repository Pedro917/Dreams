import React from "react";
import { FaEnvelope, FaLock, FaPaperPlane } from "react-icons/fa";
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
    useMediaQuery
  } from '@chakra-ui/react';

  import HeroImage from "../../assets/img/hero-image.svg"
  
  const Login = () => {

    const [isMobile] = useMediaQuery("(min-width: 992px)")

    const colors = {
        primary: "#43419e",
        secondary: "#e44e2b",
        warning: "#e44e2b",
        light: "#f4f3f9",
    }

    return (
        <Stack minH={'100vh'} direction={isMobile ? "row" : "column"} bg={colors.light} p={20}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'md'} sx={{userSelect: "none"}}>
                <Center>
                    <Heading color={colors.primary} fontSize={'2xl'}>Realize o seu login</Heading>
                </Center>
                <FormControl id="email">
                    <FormLabel>E-mail</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<Icon as={FaEnvelope} color="gray.300"/>} />
                        <Input type="email" placeholder="Digite seu e-mail" />
                    </InputGroup>
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Senha</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<Icon as={FaLock} color="gray.300"/>} />
                        <Input type="passoword" placeholder="Digite sua senha" />
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