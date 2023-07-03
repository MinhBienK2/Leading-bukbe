import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import media from '@media';

interface Props extends ButtonProps {
  mb_w?: string;
  mb_h?: string;
  onClick?: (e: any) => void;
}

export const FilledButton = styled(Button)<Props>`
  font-family: 'Mulish';
  font-weight: 700;
  font-size: ${props => props.fz ?? '24px'};
  line-height: 30.96px;
  background-color: var(--primary-1);
  border-radius: 10px;
  box-shadow: var(--shadow-black);

  :hover {
    background-color: var(--secondary-4);
    box-shadow: var(--shadow);
  }
  :not([data-disabled]):hover {
    background-color: var(--secondary-4);
  }
  :active {
    background-color: var(--secondary-3);
    box-shadow: var(--shadow);
  }
  :focus {
    outline-offset: 0px;
    outline: none;
  }

  ${media.small} {
    font-size: 16px;
    line-height: 21px;
    height: ${props => props.mb_h ?? '32px'};
    width: ${props => props.mb_w ?? '96px'};
  }
`;
// export const FilledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
