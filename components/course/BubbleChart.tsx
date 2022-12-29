//https://github.com/EliEladElrom/react-tutorials/tree/master/bubble-chart/src
import React from "react";
import * as d3 from "d3";
import { Simulation, SimulationNodeDatum } from "d3-force";
import uuid from "react-uuid";
import { Box } from "@chakra-ui/react";
import { IBubbleChartProps, IBubbleChartState, Types } from "../../types";

class BubbleChart extends React.Component<
  IBubbleChartProps,
  IBubbleChartState
> {
  public forceData: Types.ForceData[];

  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined;

  constructor(props: IBubbleChartProps) {
    super(props);
    this.state = {
      data: []
    };
    this.forceData = this.setForceData(props);
  }

  componentDidMount() {
    this.animateBubbles();
  }

  componentDidUpdate(
    prevProps: IBubbleChartProps,
    prevState: IBubbleChartState
  ) {
    if (
      JSON.stringify(prevProps.bubblesData) !==
      JSON.stringify(this.props.bubblesData)
    ) {
      this.forceData = this.setForceData(this.props);
      this.animateBubbles();
    }
  }

  setForceData = (props: IBubbleChartProps) => {
    const d = [];
    for (let i = 0; i < props.bubblesData.length; i++) {
      d.push({ size: props.bubblesData[i].size });
    }
    return d;
  };

  animateBubbles = () => {
    if (this.props.bubblesData.length > 0) {
      this.simulatePositions(this.forceData);
    }
  };

  radiusScale = (value: d3.NumberValue) => {
    const fx = d3
      .scaleSqrt()
      .range([1, 50])
      .domain([this.props.minValue, this.props.maxValue]);
    return fx(value);
  };

  simulatePositions = (data: Types.ForceData[]) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.05)
      .force("x", d3.forceX())
      .force("y", d3.forceY().strength(0.4))
      .force(
        "collide",
        d3.forceCollide((d: SimulationNodeDatum) => {
          return this.radiusScale((d as Types.ForceData).size) + 2;
        })
      )
      .on("tick", () => {
        this.setState({ data });
      });
  };

  renderBubbles = (data: []) => {
    return data.map((item: { v: number; x: number; y: number }, index) => {
      const { props } = this;
      const fontSize =
        this.radiusScale((item as unknown as Types.ForceData).size) / 4;
      const content =
        props.bubblesData.length > index ? props.bubblesData[index].name : "";

      return (
        <g
          key={`g-${uuid()}`}
          transform={`translate(${props.width / 2 + item.x - 70}, ${
            props.height / 2 + item.y
          })`}
        >
          <circle
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.selectedCircle(content);
            }}
            r={this.radiusScale((item as unknown as Types.ForceData).size)}
            fill={props.bubblesData[index].fillColor}
          />
          <text
            onClick={() => {
              this.props.selectedCircle(content);
            }}
            className="bubbleText"
            fill={this.props.textFillColor}
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="normal"
          >
            {content}
          </text>
        </g>
      );
    });
  };

  render() {
    return (
      <Box
        style={{ background: this.props.backgroundColor, cursor: "pointer" }}
      >
        <svg width={this.props.width} height={this.props.height}>
          {this.renderBubbles(this.state.data as [])}
        </svg>
      </Box>
    );
  }
}

export default BubbleChart;
