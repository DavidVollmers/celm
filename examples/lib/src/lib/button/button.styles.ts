import { css } from '@cele/core';
import { designTokens } from '../design-tokens';

export const buttonStyles = css`
  :host {
    display: inline-flex;
  }

  button {
    border: none;
    background-color: ${designTokens.colors.primary['100']};
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: white;
    transition: 0.1s linear background-color;
  }

  button:hover {
    background-color: darkblue;
  }
`;
