import styled from "styled-components";

export const ToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &:checked + span:before {
    transform: translateX(29px);
  }
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.grey[100]};
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`;
