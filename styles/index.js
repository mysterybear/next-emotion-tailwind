import emotionNormalize from 'emotion-normalize';
import { css } from '@emotion/core';

export const globalStyles = css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }
`
