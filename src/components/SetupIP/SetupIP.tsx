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
  const { handelClickConnectButton, handleChangeTextField, IPValue } = useLogic();

  return (
    <Container>
      <Grid container spacing={1} marginTop={5}>
        <Grid item xs={1}>
          <Typography variant="h5">IP</Typography>
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
      </Box>
    </Container>
  );
};
