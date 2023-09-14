import styled from "styled-components";
import { BASE_STYLE, CONTENT_MAX_WIDTH } from "./stylesUtils";

export const WrapperSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 ${({ theme }) => theme.spacing[3]};
`;

export const InputWrapperSC = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ContentSC = styled.div`
  width: ${CONTENT_MAX_WIDTH};
`;

export const WrapperIconAndTitleSC = styled(BASE_STYLE)`
  align-items: center;
  justify-content: center;
`;

export const WrapperDivideInTwoSC = styled(BASE_STYLE)`
  width: 100%;
  column-gap: ${({ theme }) => theme.spacing[10]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const TitleSC = styled.h1`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h2};
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-left: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

export const SubtitleSC = styled.h2`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
  color: ${({ theme }) => theme.colors.grey[500]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  text-align: left;
`;

export const FormSC = styled.form`
  margin: ${({ theme }) => theme.spacing[10]} 0;
  height: 450px;
  overflow-y: auto;
`;

export const WrapperButtonSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
