import styled from "styled-components";

const Ellipsis = styled.div`
  display: block;
  display: -webkit-box !important;
  ${({ noMaxHeight, lineHeight, fontSize, clamp }) =>
    noMaxHeight
      ? `height: ${(fontSize + 1) * lineHeight * clamp}px;`
      : `max-height: ${(fontSize + 1) * lineHeight * clamp}px;`}
  
  margin: ${({ marginTop }) => marginTop || 0}px 0;
  font-size: ${({ fontSize }) => fontSize}px;
  -webkit-line-clamp: ${({ clamp }) => clamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: ${({ lineHeight }) => lineHeight}rem;
  ${({ clamp }) =>
    clamp === 1 && "word-break: break-all;text-overflow: ellipsis;"}

  @supports not (-webkit-line-clamp: ${({ clamp }) => clamp}) {
    ${({ clamp }) =>
      clamp === 3 &&
      `::after {
      content: "...";
    }`}
  }
  ${({ children, ...props }) => ({ ...props })}
`;

export default Ellipsis;
