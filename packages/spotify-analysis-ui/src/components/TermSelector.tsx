import React from "react";
import { Card, H3 } from "@blueprintjs/core";
import { Term, TERMS } from "../api/responseTypes";

export default ({ setTerm }: { setTerm: (term: Term) => void }) => (
  <Card>
    <H3>Select a time period</H3>
    <div className="flex-group">
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
    </div>
  </Card>
);
