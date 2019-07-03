import { TrackResponse, Track } from "../api/responseTypes";

const DIMENSIONS = [
  "liveness",
  "valence",
  "instrumentalness",
  "danceability",
  "speechiness",
  "acousticness",
  "energy"
];

interface Aggregate {
  total: number;
  count: number;
}

export const generateFeatureGraph = (tracks: Partial<Track>[]) =>
  DIMENSIONS.map(feature => {
    const aggregate = tracks.reduce<Aggregate>(
      (acc, track) => {
        if (track[feature] !== undefined) {
          acc.total += track[feature];
          acc.count++;
          return acc;
        } else {
          return acc;
        }
      },
      { total: 0, count: 0 }
    );
    return {
      feature,
      max: 1,
      value: aggregate.count ? aggregate.total / aggregate.count : 0
    };
  });
