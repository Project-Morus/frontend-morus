import { HEADER_TABLE_CELLS } from "../../mockData";
import Icons from "../Icons";
import Status from "../Status";
import { CustomTableSC } from "./styles";

const CustomTable = () => {

const ROW_NAME_CELLS = [
  {
    name: 'Eduardo Simon' ,
    reason: 'Quebra de regras' ,
    value: 'R$300,50', 
    interest: 'R$105,38',
    date: '01/11/2023', 
    maturity: '20/11/2023', 
    status: <Status type="paid"/>, 
    actions: <Icons /> 
  },
  {
    name: 'Gustavo Wagner' ,
    reason: 'Barulho após das 22h' ,
    value: 'R$300,50', 
    interest: 'R$105,38',
    date: '01/11/2023', 
    maturity: '20/11/2023', 
    status: <Status type="pending"/>,  
    actions: <Icons /> 
  },
  {
    name: 'Eduardo Simon' ,
    reason: 'Quebra de regras' ,
    value: 'R$300,50', 
    interest: 'R$105,38',
    date: '01/11/2023', 
    maturity: '20/11/2023', 
    status: <Status type="paid"/>, 
    actions: <Icons /> 
  },
];
  return ( 
    <CustomTableSC headerCells={HEADER_TABLE_CELLS} rowCells={ROW_NAME_CELLS} emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas ocorrências!"/>
   );
}
 
export default CustomTable;