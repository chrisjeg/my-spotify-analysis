import { ProfileResponse, TrackResponse } from "./responseTypes";
import { TrackRequest } from "./requestTypes";

function fetchJson<T>(
  route: string,
  queryParams?: {
    [key: string]: any;
  }
): Promise<T> {
  const queryString = queryParams
    ? "?" +
      Object.keys(queryParams)
        .map(k => `${k}=${queryParams[k]}`)
        .join("&")
    : "";
  return fetch(route + queryString).then(x => x.json());
}

export const getProfile: () => Promise<ProfileResponse> = () =>
  fetchJson("/api/profile");

export const getTracks: (
  queryParams: TrackRequest
) => Promise<TrackResponse> = queryParams =>
  fetchJson("/api/tracks", queryParams);
