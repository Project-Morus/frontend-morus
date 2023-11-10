import { useTheme } from "styled-components";
import { NewTable, Icon } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { HEADER_TABLE_CELLS } from "../mockData";
import Status from "../Status";
import { WrapperIcons } from "./styles";

function TableMonthlyFee() {
  const theme = useTheme();

  // if (isLoading)
  //   return (
  //     <ContentLoaderSC>
  //       <Loader />
  //     </ContentLoaderSC>
  //   );

  return (
    <>
      <NewTable.Container>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>
                {header.colName}
              </NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        <NewTable.Body>
          <NewTable.Row>
            <NewTable.Cell>Taxa de Condominio</NewTable.Cell>
            <NewTable.Cell>Alguma coisa</NewTable.Cell>
            <NewTable.Cell>R$1.200,50</NewTable.Cell>
            <NewTable.Cell>01/11/2023</NewTable.Cell>
            <NewTable.Cell>
              <Status recurring={false} />
            </NewTable.Cell>
            <NewTable.Cell>
              <WrapperIcons>
                <Icon name="ph-pencil-simple-line" />
                <Icon name="ph-trash" color={theme.colors.red[500]} />
              </WrapperIcons>
            </NewTable.Cell>
          </NewTable.Row>
        </NewTable.Body>
      </NewTable.Container>
    </>
  );
}

export default TableMonthlyFee;
