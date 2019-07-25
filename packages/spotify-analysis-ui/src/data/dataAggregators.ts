import { TrackResponse, Track } from "../api/responseTypes";

const DIMENSIONS = [
  "liveness",
  "valence",
  "instrumentalness",
  "danceability",
  "speechiness",
  "acousticness",
  "energy",
  "popularity"
];

interface Aggregate {
  total: number;
  count: number;
}

export interface MinimaAndMaxima {
  dimension: string;
  max: Partial<Track>;
  min: Partial<Track>;
}

export type FeatureGraph = Array<{
  feature: string;
  max: number;
  value: number;
}>;

export const generateFeatureGraph = (tracks: Partial<Track>[]): FeatureGraph =>
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
    if(feature === "popularity"){
      aggregate.total /= 100;
    }
    return {
      feature,
      max: 1,
      value: aggregate.count ? aggregate.total / aggregate.count : 0
    };
  });

export const generateMinimaAndMaxima = (
  tracks: Partial<Track>[]
): MinimaAndMaxima[] =>
  DIMENSIONS.map(dimension =>
    tracks.reduce(
      (acc: MinimaAndMaxima, track): MinimaAndMaxima => {
        if (!track[dimension]) {
          return acc;
        }
        if (!acc.min[dimension] || acc.min[dimension] > track[dimension]) {
          acc.min = track;
        }
        if (!acc.max[dimension] || acc.max[dimension] < track[dimension]) {
          acc.max = track;
        }
        return acc;
      },
      { dimension, min: {}, max: {} }
    )
  );
