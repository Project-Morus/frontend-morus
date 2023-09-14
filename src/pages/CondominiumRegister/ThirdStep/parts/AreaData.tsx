import Input from "../../../../components/Input";
import { WrapperDivideInTwoSC } from "../styles";

const TowerData = () => {
  return (
    <>
      <WrapperDivideInTwoSC>
        <Input type="string" id={"name"} label={"Nome"} />
        <Input min={0} type="number" id={"maxPeoPleQuantity"} label={"Quantidade máxima de pessoas"} />
      </WrapperDivideInTwoSC>
    </>
  );
};

export default TowerData;
