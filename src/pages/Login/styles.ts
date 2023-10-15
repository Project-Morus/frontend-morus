import styled from 'styled-components'
import { CONTENT_MAX_WIDTH } from './stylesUtils'
import { Link } from 'react-router-dom'

export const WrapperSC = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 ${({ theme }) => theme.spacing[3]};
`

export const ContentSC = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
`

export const TitleSC = styled.h1`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h1};
  color: ${({ theme }) => theme.colors.primary[800]};

  text-align: center;

  margin-bottom: ${({ theme }) => theme.spacing[7]};
`

export const TextSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
`

export const WrapperInputsSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`

export const FormSC = styled.form`
  margin: ${({ theme }) => theme.spacing[10]} 0;
`

export const ForgotPasswordSC = styled(Link)`
  display: block;

  text-align: right;

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
`

export const WrapperButtonSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing[7]};
`

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
`

export const SignUpSC = styled(Link)`
  text-decoration: none;  
  color: ${({ theme }) => theme.colors.primary[500]};

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[800]};
  }
`