import { Stack } from "@chakra-ui/react";

import { TypeDescription } from "./TypeDescription";
import { UserDescription } from "./UserDescription";

export const Main = () => {
  return (
    <Stack
      direction={"column"}
      w={{ base: "full", xl: "container.xl" }}
      justifyContent={"space-between"}
      verticalAlign="center"
      h="600px"
    >
      <Stack
        direction={"row"}
        spacing="100"
        w={{ base: "full", xl: "container.xl" }}
        justifyContent="center"
        p={30}
        verticalAlign={"center"}
      >
        <UserDescription />
        <TypeDescription />
      </Stack>
      {/* <Box width="100px" bg="#d1d1d1" h={"100px"}></Box> */}
    </Stack>
  );
};
