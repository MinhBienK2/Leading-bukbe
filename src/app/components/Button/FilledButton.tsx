import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

interface Props extends ButtonProps {
  mb_w?: string | number;
  mb_h?: string | number;
  onClick?: (e: any) => void;
}

export const FilledButton = styled(Button)<Props>`
  font-weight: 700;
  font-size: 24px;
  line-height: 30.96px;
  background-color: var(--primary-2);
  border-radius: 18px;
  box-shadow: inset 0px -6px 2px rgba(0, 0, 0, 0.3), inset 0px -20px 2px rgba(0, 0, 0, 0.15);
  height: 51px;

  :hover {
    background-color: var(--primary-3);
    box-shadow: inset 0px -6px 2px rgba(0, 0, 0, 0.3), inset 0px -20px 2px rgba(0, 0, 0, 0.15);
  }
  :not([data-disabled]):hover {
    background-color: var(--primary-3);
  }
  :active {
    background-color: var(--primary-4);
    box-shadow: inset 0px -6px 2px rgba(0, 0, 0, 0.3), inset 0px -20px 2px rgba(0, 0, 0, 0.15);
  }
  :focus {
    outline-offset: 0px;
    outline: none;
  }
  @media screen and (max-width: 576px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    height: ${props => props.mb_h && '37px'};
    width: ${props => props.mb_w};
  }
`;
// export const FilledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
