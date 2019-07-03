export interface ProfileResponse {
  authenticated: boolean;
  image?: string;
  name?: string;
  spotifyHref?: string;
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

export type TrackResponse = Array<Track>;
