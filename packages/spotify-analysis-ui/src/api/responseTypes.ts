export type Term = "shortTerm" | "mediumTerm" | "longTerm";
export const TERMS: Term[] = ["shortTerm", "mediumTerm", "longTerm"];

export interface ProfileResponse {
  authenticated: boolean;
  image?: string;
  name?: string;
  accountUrl?: string;
  username?: string;
}

export interface Track {
  id: string;
  acousticness: number;
  artists: string[];
  danceability: number;
  energy: number;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  name: string;
  popularity: number;
  speechiness: number;
  tempo: number;
  uri: string;
  valence: number;
  [key: string]: any;
}

export type TrackResponse = {
  shortTerm: Track[];
  mediumTerm: Track[];
  longTerm: Track[];
};
