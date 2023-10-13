import styled from "styled-components";

export const LoaderSC = styled.span`
   width: 20px;
    height: 20px;
    border: 3px solid ${({ theme }) => theme.colors.white[50]};
    border-bottom-color: ${({ theme }) => theme.colors.primary[200]};
    border-radius: 50%;
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