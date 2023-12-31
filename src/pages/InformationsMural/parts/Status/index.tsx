import { CardSC, TextSC } from "./styles";
import { StatusProps, StatusTypes } from "./types";

const Status = ({type}: StatusProps) => {
  const renderText = (type: StatusTypes) => {
    if(type === 'paid') return 'Pago';

    return 'Pendente'
  }

  return (  
    <CardSC $type={type}>
      <TextSC>{`${renderText(type)}`}</TextSC>
    </CardSC>
  );
}
 
export default Status;