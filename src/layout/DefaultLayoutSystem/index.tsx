import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { ContainerSC, WrapperSC } from "./styles";

const DefaultLayoutSystem = () => {
  return (
    <ContainerSC>
      <Menu />
      <WrapperSC>
        <Outlet />
      </WrapperSC>
    </ContainerSC>
  );
}

export default DefaultLayoutSystem;