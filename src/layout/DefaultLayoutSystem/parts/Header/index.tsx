import Button from "../../../../components/Button";
import { HeaderSC } from "./styles";

const Header = () => {
  return (
    <HeaderSC>
      <div>
        <div>
          <div>
            <p>19 de janeiro de 2002</p>
            <div>Síndico(a)</div>
          </div>

          <p>Morador: Eduarda Simone</p>
        </div>
      </div>
      <div>
        <p>Ilha de Capri | Torre A | Apartamento 1103 </p>
        <Button text="Logout" />
      </div>
    </HeaderSC>
  );
}

export default Header;