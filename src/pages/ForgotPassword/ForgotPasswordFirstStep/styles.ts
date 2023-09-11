import styled from "styled-components";
import { BUTTON_MAX_WIDTH, CONTENT_MAX_WIDTH, ICON_SQUARE_DIAMETER, POSITION_BACK_LOGIN } from "./stylesUtils";
import { Link } from "react-router-dom";

export const WrapperSC = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 ${({ theme }) => theme.spacing[3]};
`;

export const ContentSC = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
`;

export const BackToLoginButtonSC = styled(Link)`
  position: absolute;
  top: ${POSITION_BACK_LOGIN};
  left: ${POSITION_BACK_LOGIN};

  max-width: ${BUTTON_MAX_WIDTH};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};

  background: none;

  cursor: pointer;

  transition: background-color 0.2s;

  border: none;
  border-radius: ${({ theme }) => theme.border.radius.regular};

  color: ${({ theme }) => theme.colors.primary[500]};

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  padding: ${({ theme }) => theme.spacing[2]};

  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
`;

export const WrapperIconSquareSC = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const TitleSC = styled.h1`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h1};
  color: ${({ theme }) => theme.colors.primary[500]};

  text-align: left;

  margin-bottom: ${({ theme }) => theme.spacing[7]};
`;

export const TextSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
`;

export const FormSC = styled.form`
  margin: ${({ theme }) => theme.spacing[10]} 0;
`;

export const ForgotPasswordSC = styled.span`
  display: block;

  text-align: right;
  text-decoration: underline;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary[500]};

  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  margin-top: ${({ theme }) => theme.spacing[10]};

  user-select: none;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[800]};
  }
`;

export const WrapperButtonSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WithoutAccountSC = styled.span`
  display: block;
  text-align: center;

  margin-top: ${({ theme }) => theme.spacing[15]};

  user-select: none;

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  strong {
    color: ${({ theme }) => theme.colors.primary[500]};
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[800]};
    }
  }
`;

export const SignUpSC = styled(Link)`
  text-decoration: none;  
  color: ${({ theme }) => theme.colors.primary[500]};

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[800]};
  }
`
