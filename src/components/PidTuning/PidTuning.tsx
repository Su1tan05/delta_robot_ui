import { Box, Button, Slider, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { SliderHandlerTypes } from "./enums";

export const PidTuning = () => {
  const {
    getSliderChangeHandler,
    handleResetSliders,
    slider1Value,
    slider2Value,
    slider3Value,
  } = useLogic();

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
            max={200}
            min={0}
            step={0.1}
            valueLabelDisplay="auto"
            value={slider1Value ?? 0}
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.P_slider).ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.P_slider)
                .ChangeCommitHandler
            }
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
            step={0.1}
            value={slider2Value ?? 0}
            valueLabelDisplay="auto"
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.I_slider).ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.I_slider)
                .ChangeCommitHandler
            }
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
            step={0.1}
            value={slider3Value ?? 0}
            valueLabelDisplay="auto"
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.D_slider).ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.D_slider)
                .ChangeCommitHandler
            }
          />
        </Box>
      </SliderContainer>
      <Button variant="outlined" onClick={handleResetSliders}>
        RESET PID
      </Button>
    </Container>
  );
};
