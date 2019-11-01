import React from "react";
import { MinimaAndMaxima, FeatureGraph } from "../data/dataAggregators";
import { Card, H2 } from "@blueprintjs/core";
import DataCard from "./DataCard";
export default ({
  minimaAndMaxima,
  featureGraph
}: {
  minimaAndMaxima: MinimaAndMaxima[];
  featureGraph: FeatureGraph;
}) => (
  <>
    {minimaAndMaxima.map(stats => {
      const featureAverage = featureGraph.find(
        graphPoint => graphPoint.feature === stats.dimension
      );
      return (
        <DataCard header={stats.dimension} key={stats.dimension}>
          {featureAverage && <div>Average: {featureAverage.value.toFixed(3)}</div>}
          <div>{JSON.stringify(stats.max)}</div>
          <div>{JSON.stringify(stats.min)}</div>
        </DataCard>
      );
    })}
  </>
);
