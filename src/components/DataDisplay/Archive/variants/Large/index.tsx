import { useTheme } from "styled-components";
import Icon from "../../../Icon";
import { ArchiveTextSC, ContainerSC, SizeTextSC, TextSC, TitleSC, WrapperTextsSC } from "./styles";
import { IArchiveProps } from "../../types";

export const ArchiveLarge = (props: IArchiveProps) => {
  const theme = useTheme()
  return (
    <ContainerSC role={props.role}>
      <Icon name='ph-file-arrow-down' size='70px' color={theme.colors.primary[400]} />
      <TitleSC>
        Arraste e Solte ou Faça Upload dos Arquivos
      </TitleSC>

      <WrapperTextsSC>
        <TextSC>Suporta somente os formatos <ArchiveTextSC>PDF</ArchiveTextSC> e <ArchiveTextSC>PNG</ArchiveTextSC></TextSC>
        <TextSC>O tamanho limite dos arquivos é de <SizeTextSC>50MB</SizeTextSC></TextSC>
      </WrapperTextsSC>
    </ContainerSC>
  );
}