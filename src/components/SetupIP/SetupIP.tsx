import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useLogic } from "./useLogic";

export const SetupIP = () => {
  const { handelClickConnectButton, handleChangeTextField, handelClickDisconnectButton, IPValue } = useLogic();

  return (
    <Container>
      <Grid container spacing={1} marginTop={5}>
        <Grid item xs={1.6}>
          <Typography variant="h6">URL(ws)</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box gridAutoFlow={"column"} display={"grid"} columnGap={3}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              defaultValue=""
              variant="filled"
              size="small"
              value={IPValue}
              onChange={handleChangeTextField}
            />
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={2}>
        <Button fullWidth variant="contained" onClick={handelClickConnectButton}>
          Подключиться
        </Button>
        <Box marginTop={0.5}>
        <Button fullWidth color={"error"} variant="contained" onClick={handelClickDisconnectButton}>
          Отключиться
        </Button>
        </Box>
      </Box>
    </Container>
  );
};
