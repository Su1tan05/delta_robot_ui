import { Button, TextField, Typography } from "@mui/material";
import { Container } from "./styles";
import { useLogic } from "./useLogic";

export const TrajectoryController = () => {

  const {handleTheta1ListChange, handleDtChange, hangleSendTrajectoryButton} = useLogic();

  return (
    <Container>
      <Typography variant="h5">Trajectory Controller</Typography>
      <TextField fullWidth label="angles list" id="theta1" onChange={handleTheta1ListChange}/>
      <TextField fullWidth label="dt" id="dt" onChange={handleDtChange} />
      <Button variant="outlined" onClick={hangleSendTrajectoryButton}>send trajectory</Button>
    </Container>
  );
};
