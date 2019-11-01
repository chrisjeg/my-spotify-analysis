import React from "react";
import { Card, H3 } from "@blueprintjs/core";
import "./DataCard.css";

interface DataCardProps {
  header?: string;
  contentClass?: string;
}

const DataCard: React.SFC<DataCardProps> = ({
  header,
  children,
  contentClass
}) => (
  <Card className="data-card">
    {header && <H3>{header}</H3>}
    <div className={contentClass || "flex-group"}>{children}</div>
  </Card>
);

export default DataCard;
