import { ProfileResponse, TrackResponse } from "./responseTypes";

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

export const getMyDatasets: () => Promise<TrackResponse> = () =>
  fetchJson("/api/myDataset");
