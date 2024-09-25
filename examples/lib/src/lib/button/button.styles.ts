import { css } from '@cele/core';
import { theme } from '../theme';

export const buttonStyles = css`
  :host {
    display: inline-flex;
  }

  button {
    border: none;
    background-color: ${theme.colors.primary['600']};
    margin: ${theme.spacing['0']};
    padding: ${theme.spacing['2.5']} ${theme.spacing['3.5']};
    border-radius: ${theme.borderRadius.md};
    color: ${theme.colors.white};
  }

  button:hover {
    background-color: ${theme.colors.primary['500']};
  }
`;
