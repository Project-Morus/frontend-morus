import styled from "styled-components";
import { Table } from "../../../../components";

export const CustomTableSC = styled(Table)`
  th {
    &:last-child {
      width: 25%;
    }
  }
`;
