import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: ${({ theme }) => theme.spacing[0]};
    margin: ${({ theme }) => theme.spacing[0]};
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.white[100]};
    color: ${({ theme }) => theme.colors.grey[500]};
    -webkit-font-smoothing: antialiased; 
   } 
 

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.typography.FONT_FAMILIES.nunito};
    font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.regular};
    font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium}
  }
`