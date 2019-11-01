import React from "react";
import "./App.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import useSpotifyDataset from "./hooks/useSpotifyDataset";
import Header from "./components/Header";
import TermSelector from "./components/TermSelector";
import FeatureRadar from "./components/FeatureRadar";
import { generateMinimaAndMaxima } from "./data/dataAggregators";
import TableOfTracks from "./components/TableOfTracks";
import MinimaAndMaxima from "./components/MinimaAndMaxima";
import MainContainer from "./components/MainContainer";

export default function App() {
  const { state, featureGraph, setTerm } = useSpotifyDataset();
  const { datasets, userProfile, isLoggedIn } = state;

  const minimaAndMaxima = generateMinimaAndMaxima(datasets[datasets.selected]);
  return (
    <div className="App">
      <MainContainer>
        <Header isLoggedIn={isLoggedIn} userProfile={userProfile.details} />
        <TermSelector setTerm={setTerm} />
        <FeatureRadar
          selected={datasets.selected}
          featureGraph={featureGraph}
        />
        <MinimaAndMaxima
          featureGraph={featureGraph}
          minimaAndMaxima={minimaAndMaxima}
        />
        <TableOfTracks tracks={datasets[datasets.selected]} />
      </MainContainer>
    </div>
  );
}
