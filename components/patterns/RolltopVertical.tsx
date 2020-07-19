/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold, Volume } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const RolltopVertical = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.cutHeight} width={props.cutWidth} />
    <Sewline
      height={props.sewHeight}
      width={props.sewWidth * 2}
      x={props.allowance}
      y={props.webbing * 2}
    />
    <Fold
      x1={props.cutWidth / 2}
      y1={props.webbing * 2}
      x2={props.cutWidth / 2}
      y2={props.cutHeight - props.allowance}
    />
    <Volume
      x={props.cutWidth / 2}
      y={props.cutHeight / 2}
      volume={props.volume}
    />
  </React.Fragment>
);

export default RolltopVertical;
