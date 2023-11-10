import styled from "styled-components";
import { Table } from "../../../../components";

export const CustomTableSC = styled(Table)`
  th {
    &:last-child {
      width: 25%;
    }
  }
`;

export const ContentLoaderSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
`;
