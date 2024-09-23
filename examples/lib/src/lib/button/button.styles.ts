import { css } from '@cele/core';

export const buttonStyles = css`
  :host {
    display: inline-flex;
  }

  button {
    border: none;
    background-color: blue;
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
