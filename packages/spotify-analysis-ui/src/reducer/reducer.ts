import { ApplicationState, LoadingState } from "./state";
import { Action, ActionType } from "./actions";
import { ProfileResponse, TrackResponse } from "../api/responseTypes";

export type ApplicationReducer = (
  state: ApplicationState,
  action: Action
) => ApplicationState;

const reducer: ApplicationReducer = (state, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_AUTHENTICATION:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: LoadingState.IN_PROGRESS
        }
      };
    case ActionType.FETCH_USER_AUTHENTICATION_SUCCESSFUL:{
      const payload: ProfileResponse = action.payload.profile;
      return {
        ...state,
        isLoggedIn: payload.authenticated,
        userProfile: {
          ...state.userProfile,
          loading: LoadingState.SUCCESS,
          details: {
            username: payload.username || "",
            image: payload.image || "",
            accountUrl: payload.accountUrl || "",
            displayName: payload.name || ""
          }
        }
      };
    }
    case ActionType.FETCH_USER_AUTHENTICATION_FAILURE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: LoadingState.FAILED
        }
      };
    case ActionType.FETCH_USER_DATA:
        return {
            ...state,
            datasets:{
                ...state.datasets,
                loading:LoadingState.IN_PROGRESS
            }
        };
    case ActionType.FETCH_USER_DATA_SUCCESSFUL:{
        const payload : TrackResponse = action.payload.datasets;
        return {
            ...state,
            datasets:{
                ...state.datasets,
                loading: LoadingState.SUCCESS,
                ...payload
            }
        }
    }
    case ActionType.FETCH_USER_DATA_FAILURE:
        return {
            ...state,
            datasets:{
                ...state.datasets,
                loading: LoadingState.FAILED
            }
        }
    default:
      return state;
  }
};

export default reducer;
