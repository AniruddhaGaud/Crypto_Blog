import {
  Flex,
  Container,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      padding="4"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" w="50px" h="50px" src="/images/btc.svg" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr={4}>Post</Text> <Text mr="4">Trending</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            borderEndRadius="3xl"
            borderLeftRadius="3xl"
            type="tel"
            placeholder="Phone number"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
