import { Box, Button, Slider, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import ROSLIB from "roslib";
import { useState } from "react";


export const MotorController = () => {

  const [slider1Value, setSlider1Value] = useState<number | number[]>();
  const [slider2Value, setSlider2Value] = useState<number | number[]>();
  const [slider3Value, setSlider3Value] = useState<number | number[]>();

  const {
    setMessage1,
    setMessage2,
    setMessage3,
    stopAllMotors,
  } = useLogic() ?? {};

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
            onChange={(e, value) => {{
              setSlider1Value(value);
            }}}
            onChangeCommitted={(e, value) => {
              if (setMessage1) {
                setMessage1(new ROSLIB.Message({ data: value }));
              }
            }}
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
            onChange={(e, value) => {{
              setSlider2Value(value);
            }}}
            onChangeCommitted={(e, value) => {
              if (setMessage2) {
                setMessage2(new ROSLIB.Message({ data: value }));
              }
            }}
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
            onChange={(e, value) => {{
              setSlider3Value(value);
            }}}
            onChangeCommitted={(e, value) => {
              if (setMessage3) {
                setMessage3(new ROSLIB.Message({ data: value }));
              }
            }}
          />
        </Box>
      </SliderContainer>
      <Button
        variant="outlined"
        onClick={() => {
          setSlider1Value(0 as number);
          setSlider2Value(0 as number);
          setSlider3Value(0 as number);
          if(stopAllMotors) {
            stopAllMotors();
          }
        }}
      >
        RESET
      </Button>
    </Container>
  );
};
