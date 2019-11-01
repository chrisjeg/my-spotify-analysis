import React from "react";
import { Track } from "../api/responseTypes";
import { Card, H3 } from "@blueprintjs/core";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import DataCard from "./DataCard";

export default ({ tracks }: { tracks: Track[] }) => (
  <DataCard header="Track List" contentClass="ag-theme-balham">
    <AgGridReact
      columnDefs={[
        { field: "name" },
        { field: "artists" },
        { field: "key" },
        { field: "mode" },
        { field: "tempo" },
        { field: "loudness" },
        { field: "liveness" },
        { field: "valence" },
        { field: "instrumentalness" },
        { field: "danceability" },
        { field: "speechiness" },
        { field: "energy" },
        { field: "popularity" }
      ]}
      enableSorting
      rowData={tracks}
    />
  </DataCard>
);
