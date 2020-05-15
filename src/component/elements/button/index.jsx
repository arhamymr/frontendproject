import React from "react";
import { Button } from "./styled";

const Index = ({ children, type = 'button', ...props }) => (
  <Button type={type} {...props}>{children}</Button>
);

export default Index;
