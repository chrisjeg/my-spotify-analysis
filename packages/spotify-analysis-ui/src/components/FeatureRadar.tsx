import React from "react";
import { Term } from "../api/responseTypes";
import { Card, H3 } from "@blueprintjs/core";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { FeatureGraph } from "../data/dataAggregators";

interface FeatureRadarProps {
  selected: Term;
  featureGraph: FeatureGraph;
}

export default ({ selected, featureGraph }: FeatureRadarProps) => (
  <Card>
    <H3>Your {selected} Feature Radar</H3>
    <div className="flex-group">
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={featureGraph}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="feature" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  </Card>
);
