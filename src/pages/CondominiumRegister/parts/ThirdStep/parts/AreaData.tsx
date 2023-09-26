
import { Input } from "../../../../../components";
import { WrapperDivideInTwoSC } from "../styles";

const TowerData = () => {
  return (
    <>
      <WrapperDivideInTwoSC>
        <Input type="string" id={"name"} label={"Nome"} />
        <Input min={0} type="number" id={"maxPeoPleQuantity"} label={"Qtd. máxima de pessoas"} />
      </WrapperDivideInTwoSC>
    </>
  );
};

export default TowerData;
