import styled from "styled-components";
import { ColorsTypes } from "./interface";
import { getColorSpinner } from "./stylesUtils";

export const LoaderSC = styled.span<{ $color: ColorsTypes }>`
   width: 20px;
    height: 20px;
    border: ${({ theme }) => theme.border.width.extraBold} solid ${({ theme }) => theme.colors.white[50]};
    border-bottom-color: ${({ $color, theme }) => getColorSpinner($color, theme)};
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



