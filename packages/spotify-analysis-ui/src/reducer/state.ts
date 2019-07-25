import { Track, Term } from "../api/responseTypes";

export enum LoadingState {
  NOT_STARTED,
  IN_PROGRESS,
  SUCCESS,
  FAILED
}

export type UserProfileDetails = {
  image: string;
  accountUrl: string;
  displayName: string;
  username: string;
} | null;

export interface ApplicationState {
  isLoggedIn: boolean;
  userProfile: {
    loading: LoadingState;
    details: UserProfileDetails;
  };
  datasets: {
    loading: LoadingState;
    selected: Term;
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
    selected: "shortTerm",
    shortTerm: [],
    mediumTerm: [],
    longTerm: []
  }
};
