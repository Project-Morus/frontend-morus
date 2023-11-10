import { useTheme } from "styled-components";
import { NewTable, Icon, Loader } from "../../../../components";
import { HEADER_TABLE_CELLS } from "../mockData";
import Status from "../Status";
import { WrapperIcons } from "./styles";
import { ContentLoaderSC } from "../../../styles";
import { MonthlyFeeResponse } from "../../../../services/monthlyFeeService/get";
import { formatDate } from "../../../../helpers/date";

interface ITableMonthlFeeProps {
  data: MonthlyFeeResponse[];
  isLoading: boolean;
}

function TableMonthlyFee({ data, isLoading }: ITableMonthlFeeProps) {
  const theme = useTheme();

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

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

        {data.map((item) => (
          <NewTable.Body>
            <NewTable.Row>
              <NewTable.Cell>{item.nome}</NewTable.Cell>
              <NewTable.Cell>{item.descricao}</NewTable.Cell>
              <NewTable.Cell>R${item.valor}</NewTable.Cell>
              <NewTable.Cell>{formatDate(item.dataFim)}</NewTable.Cell>
              <NewTable.Cell>
                <Status recurring={item.recorrent} />
              </NewTable.Cell>
              <NewTable.Cell>
                <WrapperIcons>
                  <Icon name="ph-pencil-simple-line" />
                  <Icon name="ph-trash" color={theme.colors.red[500]} />
                </WrapperIcons>
              </NewTable.Cell>
            </NewTable.Row>
          </NewTable.Body>
        ))}
      </NewTable.Container>
    </>
  );
}

export default TableMonthlyFee;
