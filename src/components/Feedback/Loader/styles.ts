import styled from "styled-components";

export const LoaderSC = styled.span`
   width: 25px;
    height: 25px;
    border: ${({ theme }) => theme.border.width.extraBold} solid ${({ theme }) => theme.colors.primary[700]};
    border-bottom-color: ${({ theme }) => theme.colors.primary[200]};
    border-radius: ${({ theme }) => theme.border.radius.circle};
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`