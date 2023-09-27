import { CardSC, TextSC } from "./styles";
import { StatusProps, StatusTypes } from "./types";

const Status = ({type}: StatusProps) => {
  const renderText = (type: StatusTypes) => {
    if(type === 'solved') return 'Resolvido';

    return 'Pendente'
  }

  return (  
    <CardSC $type={type}>
      <TextSC>{`${renderText(type)}`}</TextSC>
    </CardSC>
  );
}
 
export default Status;