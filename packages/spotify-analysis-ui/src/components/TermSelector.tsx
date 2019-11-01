import React from "react";
import { Card } from "@blueprintjs/core";
import { Term, TERMS } from "../api/responseTypes";
import DataCard from "./DataCard";

export default ({ setTerm }: { setTerm: (term: Term) => void }) => (
  <DataCard header="Select a time period">
    {TERMS.map(term => (
      <Card
        key={term}
        interactive
        className="button-card"
        onClick={() => setTerm(term)}
      >
        {term}
      </Card>
    ))}
  </DataCard>
);
