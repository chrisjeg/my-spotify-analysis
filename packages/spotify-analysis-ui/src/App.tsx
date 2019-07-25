import React from "react";
import { H1, H3, Card, H2 } from "@blueprintjs/core";

import "./App.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { AgGridReact } from "ag-grid-react";

// import trackData from "./data/tracks";
// import graphData from "./data/graph";
import useSpotifyDataset from "./hooks/useSpotifyDataset";
import Header from "./components/Header";
import TermSelector from "./components/TermSelector";
import FeatureRadar from "./components/FeatureRadar";
import { generateMinimaAndMaxima } from "./data/dataAggregators";
import TableOfTracks from "./components/TableOfTracks";
import MinimaAndMaxima from "./components/MinimaAndMaxima";

export default function App() {
  const {
    state,
    featureGraph, 
    setTerm
  } = useSpotifyDataset();
  const {
    datasets,
    userProfile,
    isLoggedIn
  } = state;

  const minimaAndMaxima = generateMinimaAndMaxima(datasets[datasets.selected]);
  console.log(minimaAndMaxima)
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} userProfile={userProfile.details}/>
      <TermSelector setTerm={setTerm}/>
      <FeatureRadar selected={datasets.selected} featureGraph={featureGraph}/>
      <MinimaAndMaxima featureGraph={featureGraph} minimaAndMaxima={minimaAndMaxima}/>
      <TableOfTracks tracks={datasets[datasets.selected]}/>
    </div>
  );
}
