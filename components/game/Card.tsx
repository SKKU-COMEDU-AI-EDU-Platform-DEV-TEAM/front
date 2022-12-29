import { Box, Container, Img } from "@chakra-ui/react";
import classnames from "classnames";

type CardProps = {
  word: string;
  onClick: (id: number) => void;
  id: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

function Card(props: CardProps) {
  const handleClick = () => {
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };
  return (
    <Box
      className={classnames("card", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive
      })}
      w="100%"
      h="100%"
      transition="0.7s"
      position="relative"
      cursor={"pointer"}
      onClick={handleClick}
    >
      <Box w="100%" h="100%" position={"absolute"} className="card-face">
        <Img w={"100%"} h={"100%"} src={"/SKKU.png"} borderRadius="4px" />
      </Box>
      <Box
        w="100%"
        h="100%"
        position={"absolute"}
        className="card-face card-back-face"
      >
        <Container>{props.word}</Container>
      </Box>
    </Box>
  );
}

export default Card;
