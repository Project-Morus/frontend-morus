import styled from "styled-components";

export const WIDTH_CONFIRMATION_MODAL = '620px'

export const BASE_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[7]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.large};
  border-radius: ${({ theme }) => theme.border.radius.large};
  background-color: ${({ theme }) => theme.colors.white[100]};
  margin: auto;
`;

export const BackdropSC = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.63);
  display: flex;
  justify-content: center;
  align-items: center;
`;
