import React, { useRef, Ref } from "react";
import d3 from "d3";

interface Point {
  x: number;
  y: number;
  z: number;
}

const ORIGIN = [480, 300];
const SCALE = 20;
const START_ANGLE = Math.PI / 4;

const d3Object = () =>
  d3
    ._3d()
    .origin(ORIGIN)
    .rotateY(START_ANGLE)
    .rotateX(-START_ANGLE)
    .scale(SCALE);

  

export default class D3Graph extends React.Component<{}> {
  private ref: SVGElement | null = null;

  private xGrid = [];
  private data = [];
  private yScale = [];

  private dragStartX: number = 0;
  private dragStartY: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;

  private grid = d3Object().shape("GRID", 20);
  private points = d3Object()
    .x((d: Point) => d.x)
    .y((d: Point) => d.y)
    .z((d: Point) => d.z);
  private yAxis = d3Object().shape("LINE_STRIP");

  private dragStart = () => {
    this.dragStartX = d3.event.x;
    this.dragStartY = d3.event.y;
  };

  private dragEnd = () => {
    this.mouseX = d3.event.x - this.dragStartX + this.mouseX;
    this.mouseY = d3.event.y - this.dragStartY + this.mouseY;
  };

  private dragged = () => {
    this.mouseX = this.mouseX || 0;
    this.mouseY = this.mouseY || 0;
    const yDelta =
      ((d3.event.x - this.dragStartX + this.mouseX) * Math.PI) / 230;
    const xDelta =
      (((d3.event.x - this.dragStartY + this.mouseY) * Math.PI) / 230) * -1;
    this.renderD3({
      grid: this.grid
        .rotateY(yDelta + START_ANGLE)
        .rotateX(xDelta - START_ANGLE)(this.xGrid)
    });
  };

  private renderD3 = ({ grid }, duration = 0) => {
    console.log(grid);
  };

  private setupDiagram() {
    const origin = [480, 300],
      j = 10,
      scale = 20,
      scatter = [],
      yLine = [],
      beta = 0,
      alpha = 0,
      key = d => d.id,
      startAngle = Math.PI / 4;

    const svg = d3
      .select("svg")
      .call(
        d3
          .drag()
          .on("drag", dragged)
          .on("start", dragStart)
          .on("end", dragEnd)
      )
      .append("g");
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var mx, my, mouseX, mouseY;

    var point3d = d3
      ._3d()
      .x(function(d) {
        return d.x;
      })
      .y(function(d) {
        return d.y;
      })
      .z(function(d) {
        return d.z;
      })
      .origin(origin)
      .rotateY(startAngle)
      .rotateX(-startAngle)
      .scale(scale);

    var yScale3d = d3
      ._3d()
      .shape("LINE_STRIP")
      .origin(origin)
      .rotateY(startAngle)
      .rotateX(-startAngle)
      .scale(scale);
  }

  public render() {
    return (
      <svg
        ref={ref => {
          this.ref = ref;
        }}
      />
    );
  }
}
