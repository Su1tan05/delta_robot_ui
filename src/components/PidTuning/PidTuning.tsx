import { Alert, Box, Button, Slider, Snackbar, Tab, Tabs, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { Motor, SliderHandlerTypes } from "./enums";
import { useState } from "react";
import { TabPanel } from "../TabPanel";

export const PidTuning = () => {
  const {
    getSliderChangeHandler,
    getSliderValues,
    handleResetSliders,
    isSuccsessAlectOpen,
    handleCloseAlert,
    handleSavePIDValues
  } = useLogic();

  const [value, setValue] = useState<Motor>(Motor.firstMotor);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Мотор №1" />
        <Tab label="Мотор №2" />
        <Tab label="Мотор №3" />
      </Tabs>
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
              value={getSliderValues(value).slider1Value ?? 0}
              onChange={
                getSliderChangeHandler(value, SliderHandlerTypes.P_slider)
                  .ChangeHangler
              }
              // onChangeCommitted={
              //   getSliderChangeHandler(SliderHandlerTypes.P_slider)
              //     .ChangeCommitHandler
              // }
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
              max={50}
              min={0}
              step={0.1}
              value={getSliderValues(value).slider2Value ?? 0}
              valueLabelDisplay="auto"
              onChange={
                getSliderChangeHandler(value, SliderHandlerTypes.I_slider)
                  .ChangeHangler
              }
              // onChangeCommitted={
              //   getSliderChangeHandler(SliderHandlerTypes.I_slider)
              //     .ChangeCommitHandler
              // }
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
              value={getSliderValues(value).slider3Value ?? 0}
              valueLabelDisplay="auto"
              onChange={
                getSliderChangeHandler(value, SliderHandlerTypes.D_slider)
                  .ChangeHangler
              }
              // onChangeCommitted={
              //   getSliderChangeHandler(SliderHandlerTypes.D_slider)
              //     .ChangeCommitHandler
              // }
            />
          </Box>
          <Button variant="outlined" onClick={handleResetSliders(value)}>
            RESET PID
          </Button>
          <Button variant="contained" onClick={handleSavePIDValues}>SAVE</Button>
        </SliderContainer>

        <Snackbar open={isSuccsessAlectOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Обновлены значения PID для всех моторов!
        </Alert>
      </Snackbar>
    </Container>
  );
};
