import { Box, Button, Stack } from "@chakra-ui/react";

import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { CourseDescription } from "./CourseDescription";

import { TypeDescription } from "./TypeDescription";
import { UserDescription } from "./UserDescription";

export const Main = () => {
  const user = useRecoilValue(userState);
  return (
    <Stack
      direction={"column"}
      w={{ base: "full", xl: "container.xl" }}
      h="600px"
      spacing={10}
    >
      <Stack direction={"row"} justifyContent="space-between" pt={30}>
        <UserDescription />
        <TypeDescription />
        <CourseDescription />
      </Stack>
      <Box bg="#F5F5F5" h={"100px"} ml={30}></Box>
    </Stack>
  );
};
