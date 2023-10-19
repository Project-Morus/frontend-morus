import { CopyrightTextSC, FooterSectionSC, FooterTextContainerSC, LeftSideSC, RightSideSC } from "./styles";

export const FooterSection = () => {
  return (
    <FooterSectionSC id="contatos">
      <FooterTextContainerSC>
        <LeftSideSC>
          <div>
            <p>Endereço:</p>
            <p>Rua das Flores, nº 130, Bairro Primavera, Cidade Imaginária, Estado dos Sonhos, CEP: 12345-678</p>
          </div>
          <div>
            <p>Horário de funcionamento:</p>
            <p>Rua das Flores, nº 130, Bairro Primavera, Cidade Imaginária, Estado dos Sonhos, CEP: 12345-678</p>
          </div>
        </LeftSideSC>
        <RightSideSC>
          <p>Contatos:</p>
          <p>WhatsApp: (11) 98765-4321</p>
          <p>Telefone: (11) 1234-5678</p>
        </RightSideSC>
      </FooterTextContainerSC>
      <CopyrightTextSC>Copyright © 2023 Morus - Todos os direitos reservados</CopyrightTextSC>
    </FooterSectionSC>
  );
}