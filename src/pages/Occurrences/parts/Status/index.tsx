import { CardSC, TextSC } from "./styles";
import { StatusProps } from "./types";

const Status = ({ resolved }: StatusProps) => {
  const renderText = (resolved: boolean) => {
    if (resolved) return 'Resolvido';

    return 'Pendente'
  }

  return (
    <CardSC $resolved={resolved}>
      <TextSC>{`${renderText(resolved)}`}</TextSC>
    </CardSC>
  );
}

export default Status;