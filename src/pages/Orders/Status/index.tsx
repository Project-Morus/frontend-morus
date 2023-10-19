import { CardSC, TextSC } from "./styles";
import { StatusProps } from "./types";

const Status = ({ collected }: StatusProps) => {
  const renderText = (collected?: boolean) => {
    if (collected) return 'Recolhido';

    return 'No Aguardo'
  }

  return (
    <CardSC $collected={collected}>
      <TextSC>{`${renderText(collected)}`}</TextSC>
    </CardSC>
  );
}

export default Status;