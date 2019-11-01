import { useEffect, useMemo } from "react";
import useThunkReducer from "./useThunkReducer";
import reducer from "../reducer/reducer";
import { INITIAL_STATE } from "../reducer/state";
import {
  generateFeatureGraph,
  generateMinimaAndMaxima
} from "../data/dataAggregators";
import {
  fetchUserAuthentication,
  fetchUserData,
  setSelectedTerm
} from "../reducer/actions";
import _ from "lodash";

import { Term } from "../api/responseTypes";

export default function useSpotifyDataset() {
  const { state, dispatch } = useThunkReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch(fetchUserAuthentication());
    dispatch(fetchUserData());
  }, []);

  const selected = state.datasets.selected;
  return {
    state,
    featureGraph: useMemo(
      () => generateFeatureGraph(state.datasets[selected]),
      [state.datasets]
    ),
    minimaAndMaxima: useMemo(
      () => generateMinimaAndMaxima(state.datasets[selected]),
      [state.datasets]
    ),
    setTerm: (term: Term) => dispatch(setSelectedTerm(term))
  };
}
