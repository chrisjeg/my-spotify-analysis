import useThunkReducer from "./useThunkReducer";
import reducer from "../reducer/reducer";
import { INITIAL_STATE } from "../reducer/state";
import { generateFeatureGraph } from "../data/dataAggregators";
import { fetchUserAuthentication, fetchUserData } from "../reducer/actions";

export default function useSpotifyDataset() {
  const {state, dispatch} = useThunkReducer(reducer, INITIAL_STATE);
  const selected = state.datasets.selected;
  return {
      state,
      featureGraph: generateFeatureGraph(state.datasets[selected]),
      getUserDetails: ()=>dispatch(fetchUserAuthentication()),
      getUserDataset: ()=>dispatch(fetchUserData())
  }
}
