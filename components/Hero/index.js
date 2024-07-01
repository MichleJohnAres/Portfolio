import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/blender-dog";
import BaseLayout from "../Wrapper/BaseLayout";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";

const LazyVoxelDog = dynamic(() => import("../DevDog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <VStack
          m="auto"
          my="10"
          mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
          zIndex="100">
          <Link
            href="https://github.com/michlejohnares"
            textDecoration="none"
            isExternal={true}
            style={{ textDecoration: "none" }}>
            <Button
              borderRadius="full"
              borderColor="blue.600"
              h="30px"
              fontSize={{ base: "sm", sm: "sm", xs: "xs" }}
              borderWidth="2px">
              Hello, I&apos;m a Web3 Full Stack Developer based in Canada
            </Button>
          </Link>
        </VStack>
        <Flex
          flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
          justify="space-between"
          direction={{
            base: "row",
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          }}>
          <Stack>
            <Heading
              fontSize={{ md: "6xl", lg: "6xl", sm: "4xl", xs: "3xl" }}
              fontWeight="extrabold">
              <Stack display="flex" direction="row">
                <Text colorScheme="black">I&apos;m</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text">
                  Michle John,
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">Senior</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text">
                  Web3
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">Fullstack</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text">
                  engineer.
                </Text>
              </Stack>
            </Heading>
            <Text py="5" colorScheme="black" fontWeight="400">
              I design and create{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}>
                web3 dApps and functional, beautiful applications
              </span>{" "}
              with passion and a focus on{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}>
                user experience
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}>
                high quality.
              </span>{" "}
            </Text>
            <ButtonGroup gap="1">
              <Button
                as="a"
                target="_blank"
                href="mailto:michlejohnares@outlook.com"
                border="2px"
                variant="outline"
                size={{ base: "md", md: "md", sm: "sm" }}
                colorScheme="teal">
                Hire me
              </Button>
              <Button
                colorScheme="teal"
                target="_blank"
                as="a"
                href="https://cal.com/michlejohnares/"
                variant="solid"
                size={{ base: "md", md: "md", sm: "sm" }}
                bgGradient="linear(to-r, teal.500, green.400)">
                Schedule a Meeting
              </Button>
            </ButtonGroup>
            <Stack py="4"></Stack>
          </Stack>
          <Stack>
            <LazyVoxelDog />
          </Stack>
        </Flex>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Hero;
