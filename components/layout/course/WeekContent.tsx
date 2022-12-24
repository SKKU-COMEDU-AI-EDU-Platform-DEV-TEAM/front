import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Content, LayoutDefaultProps } from "../../../types";

export const WeekContent = ({
  children,
  ...props
}: LayoutDefaultProps & Content) => {
  const { week, id, link, contentType } = props;
  const router = useRouter();

  return (
    <Link href={link} isExternal={contentType == 2}>
      <Stack direction={"row"} divider={<StackDivider />} p={4}>
        <Text w={"5%"} fontWeight={"bold"} textAlign={"center"}>
          {String(id).padStart(2, "0")}
        </Text>
        <Text w={"75%"} fontWeight={"bold"} textAlign={"left"} pl={2}>
          {children}
        </Text>
      </Stack>
    </Link>
  );
};
