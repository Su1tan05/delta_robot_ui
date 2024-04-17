import { Box, Button, Slider, Typography } from "@mui/material";
import { ButtonContainer, Container, SliderContainer } from "./styles";

export const PidTuning = () => {
  return (
    <Container>
      <SliderContainer>
        <Box>
          <Typography variant="body1" component="span">
            KP
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={0}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <Typography variant="body1" component="span">
            KI
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={0}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <Typography variant="body1" component="span">
            KD
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={0}
            valueLabelDisplay="auto"
          />
        </Box>
      </SliderContainer>
      <ButtonContainer>
        <Button variant="contained">SET PID</Button>
      </ButtonContainer>
    </Container>
  );
};
