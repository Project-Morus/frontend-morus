import styled, { css } from "styled-components";

export const CONTENT_MAX_HEIGHT = "350px";
export const CONTENT_MAX_HEIGHT_MEDIUM = "300px";
export const CONTENT_MAX_HEIGHT_XLARGE = "330px";
export const BUTTON_MAX_WIDTH = "250px";
export const POSITION_BACK_LOGIN = "12px";

export const BASE_STYLE = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BASE_STYLE_SCROLL = () => css`
  overflow-y: scroll;
  padding: 1rem;

  &::-webkit-scrollbar {
      width: 3px;
      height: 100%;
      
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.primary[100]};
      border-radius: ${({ theme }) => theme.border.radius.regular};
  }

    &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    border-radius: ${({ theme }) => theme.border.radius.regular};
  }
`