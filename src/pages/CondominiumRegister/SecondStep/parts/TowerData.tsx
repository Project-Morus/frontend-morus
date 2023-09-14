import Divider from "../../../../components/Divider";
import Input from "../../../../components/Input";
import { WrapperDivideInTwoSC } from "../styles";

const TowerData = () => {
  return (
    <>
      <Input id="name" label="Nome" />

      <WrapperDivideInTwoSC>
        <Input type="number" id="floorQuantity" label="Qtd de andares" />
        <Input type="number" id="apartmentQuantity" label="Qtd. de apartamentos" />
      </WrapperDivideInTwoSC>

      <Divider marginBottom="24px" marginTop="24px" />
    </>
  );
};

export default TowerData;