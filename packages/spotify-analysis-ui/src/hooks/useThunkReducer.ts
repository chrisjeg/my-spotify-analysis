import {
  useReducer,
  Reducer,
  ReducerState,
  ReducerAction,
  Dispatch
} from "react";

export default function useThunkReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const thunkDispatch = (
    action: ReducerAction<R> | ((dispatch: Dispatch<ReducerAction<R>>) => void)
  ) => {
    if (action instanceof Function) {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, thunkDispatch];
}
