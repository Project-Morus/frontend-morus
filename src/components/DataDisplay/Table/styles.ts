import styled, { css } from "styled-components";
import { MIN_HEIGHT_MESSAGE } from "./stylesUtils";
import Icon from "../Icon";

export const TableSC = styled.table`
  width: 100%;

  border-spacing: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.border.radius.regular};

  background-color: ${({ theme }) => theme.colors.white[100]};

  padding: ${({ theme }) => theme.spacing[4]};

  overflow-x: auto;

  thead {
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[200]};

    th {
      padding-left: ${({ theme }) => theme.spacing[4]};
    }
  }
`;

export const TdSC = styled.td<{ $expanse?: boolean }>`
  padding: ${({ theme }) => theme.spacing[5]};

  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  color: ${({ theme }) => theme.colors.grey[400]};
`;

export const TBodySC = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white[50]};
`;

export const TrSC = styled.tr<{ $expanse?: boolean }>`
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 74, 173, 0.15);
  border-radius: ${({ theme }) => theme.border.radius.regular};

  :nth-child(2) {
    max-width: 250px;
  }

  ${({ $expanse }) =>
    $expanse &&
    css`
      :nth-child(2) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
`;

export const TrExpanseSC = styled.tr`
  margin-top: 2rem;
  border-radius: ${({ theme }) => theme.border.radius.regular};
`;

export const IconSC = styled(Icon)`
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 16px;
`;

export const WrapperMessageSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  min-height: ${MIN_HEIGHT_MESSAGE};

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.colors.primary[500]};

  background-color: ${({ theme }) => theme.colors.white[100]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
`;
