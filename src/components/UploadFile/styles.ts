import styled from "@emotion/styled";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: "#FED100",
                borderRadius: "0 0 10px 10px",
            }
        },
    },
  },
});

export const GithibContainer = styled.div`
    padding-right: 10px;
`;