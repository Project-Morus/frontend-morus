import { CardSC, TextSC } from "./styles";
import { StatusProps } from "./types";

const Status = ({ openedVote }: StatusProps) => {
  const renderText = (openedVote: boolean) => {
    if (openedVote) return 'Em Aberto';

    return 'Concluída'
  }

  return (
    <CardSC $openedVote={openedVote}>
      <TextSC>{`${renderText(openedVote)}`}</TextSC>
    </CardSC>
  );
}

export default Status;