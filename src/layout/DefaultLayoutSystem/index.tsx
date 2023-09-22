import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { ContainerSC, WrapperSC, InternalWrapperSC } from "./styles";
import Header from "./parts/Header";

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
