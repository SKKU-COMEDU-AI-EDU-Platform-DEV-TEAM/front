import { Box, Button, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { bestScoreState, moveState } from "../../recoil";

type ScoreProps = {
  bestScore: number;
};

export default function Score(props: ScoreProps) {
  const moves = useRecoilValue<number>(moveState);
  const bestScore = useRecoilValue<number>(bestScoreState);
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      justifyContent={"center"}
      alignItems="center"
      fontSize={"xl"}
      color="#545454"
      w="700px"
      m="5%"
      gap={"10%"}
    >
      <Box display={"flex"} justifyContent="space-between" w="700px">
        <Text fontWeight={"bold"}>Moves: {moves}</Text>
        {bestScore != Number.MAX_SAFE_INTEGER && (
          <Text fontWeight={"bold"}>Best score: {props.bestScore}</Text>
        )}
      </Box>
      <Box>
        <Button
          bgColor={"#545454"}
          color="white"
          fontSize={"md"}
          w="100px"
          h="40px"
          borderRadius={"4px"}
          border="none"
          onClick={() => {
            window.location.reload();
          }}
        >
          RESTART
        </Button>
      </Box>
    </Box>
  );
}
