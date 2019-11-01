import {
  useReducer,
  Reducer,
  ReducerState,
  ReducerAction,
  Dispatch
} from "react";

export type ThunkAction<R extends Reducer<any, any>> =
  | ReducerAction<R>
  | ((dispatch: Dispatch<ReducerAction<R>>) => void);

export default function useThunkReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const thunkDispatch = (action: ThunkAction<R>) => {
    if (action instanceof Function) {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return { state, dispatch: thunkDispatch };
}
