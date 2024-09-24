import { css } from '@cele/core';
import { theme } from '../theme';

export const buttonStyles = css`
  :host {
    display: inline-flex;
  }

  button {
    border: none;
    background-color: ${theme.colors.primary['500']};
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: white;
    transition: 0.1s linear background-color;
  }

  button:hover {
    background-color: ${theme.colors.primary['700']};
  }
`;
