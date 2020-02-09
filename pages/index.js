import React, { useState } from 'react'
import { Range } from '../components'
import { useAnimation } from 'framer-motion';
import { css } from '@emotion/core';

const boxStyles = css`
background-color: pink;
width: 100px;
height: 100px;
`;

const Example = () => {

  const animation = {
    x: 500
  }

  return (
    <div css={boxStyles} animate={animation}/>
  );
};

export default Example
