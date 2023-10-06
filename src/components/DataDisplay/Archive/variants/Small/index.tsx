import { useTheme } from "styled-components";
import Icon from "../../../Icon";
import { ContainerSC, TitleSC } from "./styles";
import { IArchiveProps } from "../../types";
import { ArchiveTextSC, SizeTextSC, TextSC, WrapperTextsSC } from "../styles";

export const ArchiveSmall = (props: Omit<IArchiveProps, 'variants'>) => {
  const theme = useTheme()
  return (
    <ContainerSC role={props.role}>
      <Icon name='ph-file-arrow-down' size='60px' color={theme.colors.primary[400]} />
      <TitleSC>
        Arraste e Solte ou Faça Upload dos Arquivos
      </TitleSC>


      <WrapperTextsSC>
        <TextSC> Suporta somente os formatos <ArchiveTextSC>PDF</ArchiveTextSC> e <ArchiveTextSC>PNG</ArchiveTextSC></TextSC>
        <TextSC>O tamanho limite dos arquivos é de <SizeTextSC>50MB</SizeTextSC></TextSC>
      </WrapperTextsSC>
    </ContainerSC>
  );
}