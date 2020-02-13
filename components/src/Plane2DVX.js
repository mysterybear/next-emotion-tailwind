import { AxisLeft, AxisBottom } from '@vx/axis';
import { scaleLinear } from '@vx/scale';
import { Group } from '@vx/group'
import { Grid } from '@vx/grid';
import * as R from 'ramda';

export default ({
  width = 800,
  height = 800,
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  },
  x0 = -10,
  x1 = 10,
  y0 = -10,
  y1 = 10
}) => {
  const
    xMax = width - margin.left - margin.right,
    yMax = height - margin.top - margin.bottom,

    xUnit = xMax / (x1-x0),
    yUnit = yMax / (y1-y0),

    xScale = scaleLinear({
      domain: [x0, x1],
      range: [0, xMax]
    }),

    yScale = scaleLinear({
      domain: [y0, y1],
      range: [yMax, 0]
    }),

    xTicks = R.range(x0, x1 + 1).filter(x => x !== 0),
    yTicks = R.range(y0, y1 + 1).filter(y => y !== 0);

  return (
    <div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            stroke="rgba(0,0,0,0.2)"
            width={xMax}
            height={yMax}
            rowTickValues={yTicks.slice(1,yTicks.length-1)}
            columnTickValues={xTicks.slice(1,xTicks.length-1)}
          />
          <AxisBottom top={yUnit*y1} scale={xScale} tickValues={xTicks} />
          <AxisLeft left={xUnit*Math.abs(x0)} scale={yScale} tickValues={yTicks} />
        </Group>
      </svg>
    </div>
  );
}
