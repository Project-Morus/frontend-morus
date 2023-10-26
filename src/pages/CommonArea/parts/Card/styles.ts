import { styled } from "styled-components";

export const CardSC = styled.div`
  border-radius: 10px;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 120px;
  box-shadow: 0px 4px 16px 0px rgba(0, 74, 173, 0.15);
`;

export const RowSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;
