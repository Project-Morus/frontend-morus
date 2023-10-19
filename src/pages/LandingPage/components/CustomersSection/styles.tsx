import styled from "styled-components";
import { IMAGE_WIDTH } from "./stylesUtils";

export const CustomersSectionSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: ${({ theme }) => theme.spacing[17]} 0;
`;

export const CustomersRowSC = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[13]};

  margin: ${({ theme }) => theme.spacing[13]} 0;
`;

export const CustomerCardContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const CustomerNameSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
`;

export const CustomerImageSC = styled.img`
  width: ${IMAGE_WIDTH};
`;