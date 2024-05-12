import styled from "@emotion/styled";

interface SeparationContainerProps {
    margin?: string;
}

export const SeparationContainer = styled.div<SeparationContainerProps>`
  display: flex;
  margin: ${(props: SeparationContainerProps) => props.margin || "0"};
  border-radius: 10px;
  background-color: #edeff0;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
`;

export const AditionalButtonsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MainContainer = styled.div`
  padding-top: 90px;
`;