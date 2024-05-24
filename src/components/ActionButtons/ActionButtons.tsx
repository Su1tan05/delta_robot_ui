import { Button, Grid, ToggleButton, Tooltip } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import Stop from "@mui/icons-material/Stop";
import TimelineIcon from "@mui/icons-material/Timeline";
import DeleteIcon from "@mui/icons-material/Delete";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useState } from "react";
import { Container } from "./styles";
import { useLogic } from "./useLogic";

export const ActionButtons = () => {
  const [selected, setSelected] = useState(false);

  const {handleResetAll} = useLogic();
  
  return (
    <Container>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Tooltip title="Play">
          <Button>
            <PlayIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Pause">
          <Button>
            <Pause />
          </Button>
        </Tooltip>
        <Tooltip title="Stop">
          <Button>
            <Stop />
          </Button>
        </Tooltip>
      </Grid>
      <Grid item xs={6} textAlign={"right"}>
        <Tooltip title="enable real time plot">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <TimelineIcon />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Delete">
          <Button>
            <DeleteIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Reset all">
          <Button onClick={handleResetAll}>
            <RestartAltIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
    </Container>
  );
};
