import React, { useState } from "react";
import { H1, H3, Card } from "@blueprintjs/core";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import "./App.css";

// import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { AgGridReact } from "ag-grid-react";

const data = [
  {
    feature: "Liveness",
    value: 0.1915876163873375,
    max: 1
  },
  {
    feature: "Valence",
    value: 0.5400935133457481,
    max: 1
  },
  {
    feature: "Instrumentalness",
    value: 0.047959706703910504,
    max: 1
  },
  {
    feature: "danceability",
    value: 0.5950908752327756,
    max: 1
  },
  {
    feature: "speechiness",
    value: 0.07932216014897578,
    max: 1
  },
  {
    feature: "Acousticness",
    value: 0.1637370023339542,
    max: 1
  },
  {
    feature: "Energy",
    value: 0.7215364618249529,
    max: 1
  }
];

export default function App() {
  const [term, setTerm] = useState("Short Term");
  const [tracks, setTracks] = useState([]);

  return (
    <div className="App">
      <H1>Your Spotify Usage : {term}</H1>
      <Card>
        <H3>How long are we talking about?</H3>
        <div className="flex-group">
          <Card
            interactive
            className="button-card"
            onClick={() => {
              fetch("/api/tracks").then(x => x.json()).then(x => setTracks(x))
              setTerm("Short Term")
            }}
          >
            Short Term
          </Card>
          <Card
            interactive
            className="button-card"
            onClick={() => setTerm("Medium Term")}
          >
            Medium Term
          </Card>
          <Card
            interactive
            className="button-card"
            onClick={() => setTerm("Long Term")}
          >
            Long Term
          </Card>
        </div>
      </Card>

      <div className="flex-group" />
      <Card>
        <H3>Your {term} Feature Radar</H3>
        <div className="flex-group">
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
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
      <Card>
        <div className="ag-theme-balham">
          <AgGridReact
            columnDefs={[
              { field: "name" },
              { field: "artists" },
              { field: "key" },
              { field: "mode" },
              { field: "tempo" },
              { field: "loudness" },
              { field: "liveness" },
              { field: "valence" },
              { field: "instrumentalness" },
              { field: "danceability" },
              { field: "speechiness" },
              { field: "energy" },
              { field: "popularity" }
            ]}
            enableSorting
            rowData={tracks}
            // deltaRowDataMode
          />
        </div>
      </Card>
      <div />
    </div>
  );
}
