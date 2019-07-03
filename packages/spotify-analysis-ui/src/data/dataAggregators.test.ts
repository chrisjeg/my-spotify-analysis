import { generateFeatureGraph } from "./dataAggregators";

describe("Data aggregators", () => {
  test("generate empty feature graph", () => {
    expect(generateFeatureGraph([])).toEqual([
      { feature: "liveness", max: 1, value: 0 },
      { feature: "valence", max: 1, value: 0 },
      { feature: "instrumentalness", max: 1, value: 0 },
      { feature: "danceability", max: 1, value: 0 },
      { feature: "speechiness", max: 1, value: 0 },
      { feature: "acousticness", max: 1, value: 0 },
      { feature: "energy", max: 1, value: 0 }
    ]);
  });

  test("generate feature graph", () => {
    const tracks = [{ liveness: 1, energy: 1 }, { liveness: 0 }, { energy: 1 }];
    expect(generateFeatureGraph(tracks)).toEqual([
      { feature: "liveness", max: 1, value: 0.5 },
      { feature: "valence", max: 1, value: 0 },
      { feature: "instrumentalness", max: 1, value: 0 },
      { feature: "danceability", max: 1, value: 0 },
      { feature: "speechiness", max: 1, value: 0 },
      { feature: "acousticness", max: 1, value: 0 },
      { feature: "energy", max: 1, value: 1 }
    ]);
  });
});
