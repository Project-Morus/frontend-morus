
import { BlueTitleSC } from "../../styles";
import { CustomerCardContainerSC, CustomerImageSC, CustomerNameSC, CustomersRowSC, CustomersSectionSC } from "./styles";

export const CustomersSection = () => {
  return (
    <CustomersSectionSC>
      <BlueTitleSC>Alguns de nossos clientes</BlueTitleSC>
      <CustomersRowSC>
        <CustomerCardContainerSC>
          <CustomerImageSC src="src/assets/png/customer1.png" alt="Condomínio Sol Nascente" />
          <CustomerNameSC>Sol Nascente</CustomerNameSC>
        </CustomerCardContainerSC>

        <CustomerCardContainerSC>
          <CustomerImageSC src="src/assets/png/customer2.png" alt="Condomínio Praia Serena" />
          <CustomerNameSC>Praia Serena</CustomerNameSC>
        </CustomerCardContainerSC>

        <CustomerCardContainerSC>
          <CustomerImageSC src="src/assets/png/customer3.png" alt="Condomínio Vista Jardim" />
          <CustomerNameSC>Vista Jardim</CustomerNameSC>
        </CustomerCardContainerSC>

        <CustomerCardContainerSC>
          <CustomerImageSC src="src/assets/png/customer4.png" alt="Condomínio Lagoa Azul Residence" />
          <CustomerNameSC>Lagoa Azul Residence</CustomerNameSC>
        </CustomerCardContainerSC>
      </CustomersRowSC>
    </CustomersSectionSC>
  );
}