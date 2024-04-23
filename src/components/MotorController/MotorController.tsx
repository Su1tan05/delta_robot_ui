import { Box, Button, Slider, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { SliderHandlerTypes } from "./enum";

export const MotorController = () => {
  const {
    handleResetSliders,
    getSliderChangeHandler,
    slider1Value,
    slider2Value,
    slider3Value,
  } = useLogic();

  return (
    <Container>
      <h1>Motor controller</h1>
      <SliderContainer>
        <Box>
          <Typography variant="body1" component="span">
            Motor 1
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={-100}
            value={slider1Value ?? 0}
            valueLabelDisplay="auto"
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.Motor1_slider)
                .ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.Motor1_slider)
                .ChangeCommitHandler
            }
          />
        </Box>
        <Box>
          <Typography variant="body1" component="span">
            Motor 2
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={-100}
            value={slider2Value ?? 0}
            valueLabelDisplay="auto"
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.Motor2_slider)
                .ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.Motor2_slider)
                .ChangeCommitHandler
            }
          />
        </Box>
        <Box>
          <Typography variant="body1" component="span">
            Motor 3
          </Typography>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            max={100}
            min={-100}
            value={slider3Value ?? 0}
            valueLabelDisplay="auto"
            onChange={
              getSliderChangeHandler(SliderHandlerTypes.Motor3_slider)
                .ChangeHangler
            }
            onChangeCommitted={
              getSliderChangeHandler(SliderHandlerTypes.Motor3_slider)
                .ChangeCommitHandler
            }
          />
        </Box>
      </SliderContainer>
      <Button variant="outlined" onClick={handleResetSliders}>
        RESET
      </Button>
    </Container>
  );
};
