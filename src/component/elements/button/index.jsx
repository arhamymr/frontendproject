import React from "react";
import { Button } from "./styled";

const Index = ({ children, type = 'button' }) => (
  <Button type={type}>{children}</Button>
);

export default Index;
