import { HEADER_TABLE_CELLS } from "../../mockData";
import Status from "../Status";
import { CustomTableSC } from "./styles";

const CustomTable = () => {
const ROW_NAME_CELLS = [
  { reason: "Carro bateu na pilastra da garagem", date: "01/11/2023", status: <Status type="solved"/> },
  { reason: "Elevador quebrou devido à sobrecarga elétrica", date: "01/11/2023", status: <Status type="solved"/> },
  { reason: "Bicicleta desapareceu do bicicletário", date: "01/11/2023", status: <Status  type="solved"/> },
  { reason: "Vidro da portaria quebrou com o vento", date: "01/11/2023", status: <Status type="pending"/> },
  { reason: "Esteira da academia parou de funcionar", date: "01/11/2023", status: <Status type="solved"/> },
  { reason: "Portão da garagem enguiçou", date: "01/11/2023", status: <Status type="pending"/> },
];
  return ( 
    <CustomTableSC headerCells={HEADER_TABLE_CELLS} rowCells={ROW_NAME_CELLS} />
   );
}
 
export default CustomTable;