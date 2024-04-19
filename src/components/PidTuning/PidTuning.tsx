import { Box, Button, Slider, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { useState } from "react";
import ROSLIB from "roslib";
import { set } from "lodash";

export const PidTuning = () => {
  const [slider1Value, setSlider1Value] = useState<number | number[]>();
  const [slider2Value, setSlider2Value] = useState<number | number[]>();
  const [slider3Value, setSlider3Value] = useState<number | number[]>();

  const { setMessage } = useLogic() ?? {};

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
            step={0.1}
            valueLabelDisplay="auto"
            value={slider1Value ?? 0}
            onChange={(e, value) => {
              {
                setSlider1Value(value);
              }
            }}
            onChangeCommitted={(e, value) => {
              {
                if (setMessage) {
                  setMessage(
                    new ROSLIB.Message({
                      x: value,
                      y: slider2Value,
                      z: slider3Value,
                    })
                  );
                }
              }
            }}
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
            onChange={(e, value) => {
              {
                setSlider2Value(value);
              }
            }}
            onChangeCommitted={(e, value) => {
              {
                if (setMessage) {
                  setMessage(
                    new ROSLIB.Message({
                      x: slider1Value,
                      y: value,
                      z: slider3Value,
                    })
                  );
                }
              }
            }}
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
            onChange={(e, value) => {
              {
                setSlider3Value(value);
              }
            }}
            onChangeCommitted={(e, value) => {
              {
                if (setMessage) {
                  setMessage(
                    new ROSLIB.Message({
                      x: slider1Value,
                      y: slider2Value,
                      z: value,
                    })
                  );
                }
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
          if (setMessage) {
            setMessage(new ROSLIB.Message({
              kp: 0,
              ki: 0,
              kd: 0,
            }));
          }
        }}
      >
        RESET PID
      </Button>
    </Container>
  );
};
