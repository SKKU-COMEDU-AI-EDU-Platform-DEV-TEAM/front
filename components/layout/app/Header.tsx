import {
  Button,
  Center,
  Flex,
  Icon,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { GoPencil } from "react-icons/go";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  const [user, setUser] = useRecoilState(userState);
  return (
    <Center
      as="nav"
      role={"navigation"}
      minH="16"
      width="full"
      position={"fixed"}
      px={4}
      backgroundColor={"gray.50"}
      boxShadow={"xs"}
    >
      <Stack
        direction={"row"}
        w={{ base: "full", xl: "container.xl" }}
        justifyContent={"space-between"}
        verticalAlign="center"
      >
        <Center>
          <Icon as={GoPencil} fontSize={"2xl"} color="gray.500" mr="3" />
          <Text fontSize={"2xl"} fontWeight={600} color="gray.500">
            SKK E<span id="type">:D</span>U
          </Text>
        </Center>
        <Center>
          <Stack direction={{ base: "row", sm: "row" }} align="start">
            <Link as={NextLink} href="/">
              <Button
                colorScheme="teal"
                variant="link"
                p={[4]}
                color="rgb(144, 187, 144)"
              >
                <Avatar size="xs" bg="gray.500" mr={"2"} />
                <Text fontSize={"md"} fontWeight={600} color="gray.500">
                  {user.userName}
                </Text>
              </Button>
            </Link>
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
}
