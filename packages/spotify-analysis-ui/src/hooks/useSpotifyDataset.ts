import { useEffect } from "react";
import useThunkReducer from "./useThunkReducer";
import reducer from "../reducer/reducer";
import { INITIAL_STATE } from "../reducer/state";
import { generateFeatureGraph } from "../data/dataAggregators";
import { fetchUserAuthentication, fetchUserData, setSelectedTerm } from "../reducer/actions";
import { Term } from "../api/responseTypes";

export default function useSpotifyDataset() {
  const { state, dispatch } = useThunkReducer(reducer, INITIAL_STATE);
  useEffect(()=>{
    dispatch(fetchUserAuthentication())
    dispatch(fetchUserData())
  },[]);
  const selected = state.datasets.selected;
  console.log(state);
  return {
    state,
    featureGraph: generateFeatureGraph(state.datasets[selected]),
    setTerm: (term: Term) => dispatch(setSelectedTerm(term))
  };
}
