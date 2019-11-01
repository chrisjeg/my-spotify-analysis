import React from "react";
import { Term } from "../api/responseTypes";
import _ from "lodash";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { FeatureGraph } from "../data/dataAggregators";
import DataCard from "./DataCard";

interface FeatureRadarProps {
  selected: Term;
  featureGraph: FeatureGraph;
}

export default ({ selected, featureGraph }: FeatureRadarProps) => (
  <DataCard header={`Your ${selected} Feature Radar`}>
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
  </DataCard>
);
