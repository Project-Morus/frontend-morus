import { Outlet } from "react-router-dom";
import { ContainerSC, WrapperSC, InternalWrapperSC } from "./styles";
import Header from "./parts/Header";
import { Menu } from "../../components";

const DefaultLayoutSystem = () => {
  return (
    <ContainerSC>
      <Menu />
      <WrapperSC>
        <Header />
        <InternalWrapperSC>
          <Outlet />
        </InternalWrapperSC>
      </WrapperSC>
    </ContainerSC>
  );
};

export default DefaultLayoutSystem;
