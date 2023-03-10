import React from "react";
import styled from "styled-components";

import { theme } from "../../styles/theme";
import { plus } from "../../assets/svg";

interface TextButtonProps {
  onClick: () => void;
}

export const AddButton: React.FC<TextButtonProps> = ({ onClick }) => (
  <ButtonStyled onClick={onClick}>{plus}</ButtonStyled>
);

const ButtonStyled = styled.button`
  position: absolute;
  left: 50%;
  top: 6px;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  border: none;
  width: 3rem;
  height: 3rem;
  background-color: ${theme.colors.primary100};

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.primary80};
  }
`;
