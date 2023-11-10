import { CardSC, TextSC } from "./styles";
import { StatusProps } from "./types";

const Status = ({ recurring }: StatusProps) => {
  const renderText = (recurring: boolean) => {
    if (recurring) return "Resolvido";

    return "Pendente";
  };

  return (
    <CardSC $recurring={recurring}>
      <TextSC>{`${renderText(recurring)}`}</TextSC>
    </CardSC>
  );
};

export default Status;
