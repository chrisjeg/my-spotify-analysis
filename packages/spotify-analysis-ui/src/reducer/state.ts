import { Track } from "../api/responseTypes";

export enum LoadingState {
  NOT_STARTED,
  IN_PROGRESS,
  SUCCESS,
  FAILED
}

export interface ApplicationState {
  isLoggedIn: boolean;
  userProfile: {
    loading: LoadingState;
    details: {
      image: string;
      accountUrl: string;
      displayName: string;
      username: string;
    } | null;
  };
  datasets: {
    loading: LoadingState;
    shortTerm: Track[];
    mediumTerm: Track[];
    longTerm: Track[];
  };
}

export const INITIAL_STATE: ApplicationState = {
  isLoggedIn: false,
  userProfile: {
      loading: LoadingState.NOT_STARTED,
      details: null
  },
  datasets: {
    loading: LoadingState.NOT_STARTED,
    shortTerm: [],
    mediumTerm: [],
    longTerm: []
  }
};
