import React from "react";
import { Card } from "./styled";

const Index = ({ children, noPadding }) => (
  <Card padding={noPadding}>{children}</Card>
);

export default Index;
