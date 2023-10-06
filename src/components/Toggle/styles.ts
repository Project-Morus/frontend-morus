import styled from "styled-components";

export const ToggleWrapper = styled.label`
  background: ${({ theme }) => theme.colors.white[50]};
  width: 4rem;
  height: 2rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  input:cheked + span {
    left: 50%;
    background: blue;
  }

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.white[100]};
    left: 0;
    cursor: pointer;
    box-shadow: 2px 2px 4px gray;
    transition: 0.25s;
  }
`;
