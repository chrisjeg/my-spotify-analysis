import { ThunkAction } from "../hooks/useThunkReducer";
import { ApplicationReducer } from "./reducer";
import { getProfile, getMyDatasets } from "../api/fetchers";

export enum ActionType {
  FETCH_USER_AUTHENTICATION,
  FETCH_USER_AUTHENTICATION_SUCCESSFUL,
  FETCH_USER_AUTHENTICATION_FAILURE,
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESSFUL,
  FETCH_USER_DATA_FAILURE
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export const fetchUserAuthentication = (): ThunkAction<
  ApplicationReducer
> => async dispatch => {
  dispatch({
    type: ActionType.FETCH_USER_AUTHENTICATION
  });
  try {
    const profile = await getProfile();
    dispatch({
      type: ActionType.FETCH_USER_AUTHENTICATION_SUCCESSFUL,
      payload: {
        profile
      }
    });
  } catch (exception) {
    dispatch({
      type: ActionType.FETCH_USER_AUTHENTICATION_FAILURE,
      payload: {
        exception
      }
    });
  }
};

export const fetchUserData = (): ThunkAction<ApplicationReducer> => async dispatch => {
    dispatch({
        type: ActionType.FETCH_USER_DATA
      });
      try {
        const datasets = await getMyDatasets();
        dispatch({
          type: ActionType.FETCH_USER_DATA_SUCCESSFUL,
          payload: {
            datasets
          }
        });
      } catch (exception) {
        dispatch({
          type: ActionType.FETCH_USER_DATA_FAILURE,
          payload: {
            exception
          }
        });
      }
}