import styled from "styled-components";
import { BASE_STYLE, BASE_STYLE_SCROLL, CONTENT_MAX_HEIGHT_MEDIUM, CONTENT_MAX_HEIGHT_XLARGE } from "../stylesUtils";
import { CONTENT_MAX_WIDTH } from "./stylesUtils";

export const WrapperSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSC = styled.div`
  width: 100%;
`;

export const WrapperIconAndTitleSC = styled(BASE_STYLE)`
  align-items: center;
  justify-content: center;
`;

export const WrapperDivideInTwoSC = styled(BASE_STYLE)`
  width: 100%;
  column-gap: ${({ theme }) => theme.spacing[10]};

  & + & {
    margin-top: ${({ theme }) => theme.spacing[6]};
  }
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
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  
  margin: ${({ theme }) => theme.spacing[10]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => theme.spacing[6]} 0;
    max-height: ${CONTENT_MAX_HEIGHT_MEDIUM};

    ${BASE_STYLE_SCROLL};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) and (max-width: ${({ theme }) => theme.breakpoints.xlarge}) {
    max-height: ${CONTENT_MAX_HEIGHT_XLARGE};

    ${BASE_STYLE_SCROLL};
  }
`;

export const CentralizerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
`;

export const WrapperButtonSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing[6]};
`;
