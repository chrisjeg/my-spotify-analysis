import { useState } from "react";
import { TrackResponse } from "../api/responseTypes";
import { Term } from "../api/requestTypes";
import { getTracks } from "../api/fetchers";

interface DataSetState {
  term: Term;
  dataset: TrackResponse;
}

const DIMENSIONS = [
  "liveness",
  "valence",
  "instrumentalness",
  "danceability",
  "speechiness",
  "acousticness",
  "energy"
];

const generateGraph = (tracks: TrackResponse) =>
  DIMENSIONS.map(feature => ({
    feature,
    max: 1,
    value:
      tracks.reduce((acc, track) => {
        return track[feature] ? acc + track[feature] : acc;
      }, 0) / tracks.length
  }));

export default function useSpotifyDataset() {
  const [dataset, setDataset] = useState<DataSetState>({
    term: Term.Short,
    dataset: []
  });
  const getDataset = (term: Term) => {
    // setDataset({
    //   term,
    //   dataset: []
    // });
    getTracks({ term }).then(ds =>
      setDataset({
        term,
        dataset: ds
      })
    );
  };
  return [dataset, generateGraph(dataset.dataset), getDataset];
}
