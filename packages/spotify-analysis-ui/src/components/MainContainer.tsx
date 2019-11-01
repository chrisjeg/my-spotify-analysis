import React from "react";
import "./MainContainer.css";

const MainContainer : React.SFC = ({ children }) => (
  <div className="main-container">{children}</div>
);

export default MainContainer;
