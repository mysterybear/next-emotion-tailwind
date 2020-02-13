import React, { useState } from 'react'
import tw from 'tailwind.macro'
import { Plane2DD3, Plane2DVX, Range } from '../components'

const IndexPage = () => {
  const [ x0, setX0 ] = useState(-10);
  const [ x1, setX1 ] = useState(10);
  const [ y0, setY0 ] = useState(-10);
  const [ y1, setY1 ] = useState(10);
  return (
    <>
      <div css={tw`flex`}>
        <Plane2DVX x0={x0} x1={x1} y0={y0} y1={y1} />
        <Plane2DD3 x0={x0} x1={x1} y0={y0} y1={y1} />
      </div>
      <div>
        <Range name="x0" value={x0} setter={setX0} min={-16} max={0} step={1} />
        <Range name="x1" value={x1} setter={setX1} min={0} max={16} step={1} />
        <Range name="y0" value={y0} setter={setY0} min={-16} max={0} step={1} />
        <Range name="y1" value={y1} setter={setY1} min={0} max={16} step={1} />
      </div>
    </>
  );
}

export default IndexPage;
