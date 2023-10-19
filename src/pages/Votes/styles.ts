import styled from "styled-components";

export const HeaderSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[9]};
`;

export const InputAndButtonsContainerSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-self: baseline;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const ButtonContainerSC = styled.div`
  width: 100%;
  max-width: 347px;

  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  
  height: 50px;
  align-self: last baseline;
`;

export const ContentLoaderSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

` 