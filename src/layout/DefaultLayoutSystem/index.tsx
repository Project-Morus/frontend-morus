import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { ContainerSC } from "./styles";

const DefaultLayoutSystem = () => {
  return (
    <ContainerSC>
      <Menu />
      <Outlet />
    </ContainerSC>
  );
}

export default DefaultLayoutSystem;