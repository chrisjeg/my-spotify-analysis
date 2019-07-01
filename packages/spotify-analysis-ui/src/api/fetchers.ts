import { ProfileResponse } from "./responseTypes";

function fetchJson<T>(route: string): Promise<T> {
  return fetch(route).then(x => x.json());
}

export const getProfile: () => Promise<ProfileResponse> = () =>
  fetchJson("/api/profile");
