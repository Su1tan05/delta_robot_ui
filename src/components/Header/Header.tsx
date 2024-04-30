import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Tooltip,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles";
import Logo from "../../assets/delta-logo.svg";
import SettingLogo from "../../assets/delta-settings.svg";
import GithubLogo from "../../assets/github-logo.svg";
import { useLogic } from "./useLogic";

export const Header = () => {
  const {
    handleClickLogo,
    handleClickModelingButton,
    handleClickPlotsButton,
    handleClickTableButton,
    handleClickVersionLink,
    handleClickGithubLogo,
    handleClickSettingsButton,
  } = useLogic();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton sx={{ p: 0 }} onClick={handleClickLogo}>
              <img src={Logo} alt="logo" style={{ width: "50px" }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                DELTA_DC
              </Typography>
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "black", display: "block" }}
                onClick={handleClickModelingButton}
              >
                Моделирование
              </Button>
              <Button
                sx={{ my: 2, color: "black", display: "block" }}
                onClick={handleClickPlotsButton}
              >
                Графики
              </Button>
              <Button
                sx={{ my: 2, color: "black", display: "block" }}
                onClick={handleClickTableButton}
              >
                Таблица
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleClickVersionLink}>
                <Typography>v1.0.1-beta</Typography>
              </IconButton>
              <IconButton sx={{ p: 0 }} onClick={handleClickGithubLogo}>
                <img src={GithubLogo} alt="github" style={{ width: "40px" }} />
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 1 }} onClick={handleClickSettingsButton}>
                  <img
                    src={SettingLogo}
                    alt="settings"
                    style={{ width: "50px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
