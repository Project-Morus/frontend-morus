import LogoBlueSVG from "../../../assets/svg/LogoBlue";
import { Icon } from "../../";
import { MENU_LIST } from "./menu";
import { ContainerSC, FooterSC, LiSC, MenuSC, LinkSC, WrapperMenuSC } from "./styles";

import { useState } from "react";

const Menu = () => {
  const [navs] = useState(MENU_LIST);

  return (
    <ContainerSC>
      <MenuSC>
        <LogoBlueSVG />

        <WrapperMenuSC>
          {navs.map((item, index) => (
            <LinkSC key={index} to={item.link}>
              <Icon name={item.icon} />
              <LiSC>{item.title}</LiSC>
            </LinkSC>
          ))}
        </WrapperMenuSC>
      </MenuSC>

      <FooterSC>Todos os direitos reservados Morus Company 2023 | Versão 1.0.0</FooterSC>
    </ContainerSC>
  );
};

export default Menu;
