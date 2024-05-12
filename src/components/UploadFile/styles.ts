import styled from "@emotion/styled";
import ClearIcon from "@mui/icons-material/Clear";

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AttachDescription = styled.div`
  color: #8f9491;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: "nowrap";
  overflow: hidden;
`;

export const CancelIcon = styled(ClearIcon)`
  --size: 15px;

  width: var(--size);
  height: var(--size);
`;
