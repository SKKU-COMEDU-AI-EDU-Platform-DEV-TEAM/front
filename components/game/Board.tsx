import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { arr } from "../../config";
import { bestScoreState, moveState } from "../../recoil";
import Card from "./Card";

type BoardProps = {
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  cardIds: Array<number>;
};

function Board(props: BoardProps) {
  const [moves, setMoves] = useRecoilState<number>(moveState);
  const [bestScore, setBestScore] = useRecoilState<number>(bestScoreState);

  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}));

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (clearedCards.length === props.cardIds.length) {
      const newBestScore = moves < bestScore ? moves : bestScore;
      setBestScore(newBestScore);
      setMoves(0);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    // check if first card is equal second card
    if ((first % 6) + 1 === (second % 6) + 1) {
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }
    // flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      // in this case we have alredy selected one card
      // this means that we are finishing a move
      setOpenCards((prev) => [...prev, id]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      // in this case this is the first card we select
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(() => {});
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const checkIsInactive = (id: number) => {
    return clearedCards.includes(id);
  };

  return (
    <Box
      display={"grid"}
      justifyItems="center"
      gridTemplateColumns={"repeat(4,1fr)"}
      gridTemplateRows={"repeat(3,1fr)"}
      gap="10px"
      w="700px"
      h="500px"
    >
      {props.cardIds.map((i) => {
        return (
          <Card
            key={`card${i}`}
            word={arr[i % 6]}
            id={i}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(i)}
            isFlipped={checkIsFlipped(i)}
            onClick={handleCardClick}
          />
        );
      })}
    </Box>
  );
}

export default Board;
