import { Box, Button, Slider, Tab, Tabs, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { SliderHandlerTypes } from "./enum";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MotorController = () => {
  const {
    handleResetSliders,
    getSliderChangeHandler,
    slider1Value,
    slider2Value,
    slider3Value,
  } = useLogic();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Управление положением" {...a11yProps(0)} />
            <Tab label="Управление углами" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SliderContainer>
            <Box>
              <Typography variant="body1" component="span">
                X
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                style={{ width: "90vh" }}
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
                Y
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "90vh" }}
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
                Z
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "90vh" }}
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SliderContainer>
            <Box>
              <Typography variant="body1" component="span">
                &#x398;1
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "90vh" }}
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
                &#x398;2
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "90vh" }}
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
                &#x398;3
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "90vh" }}
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
        </CustomTabPanel>
      </Box>
      <Button variant="outlined" onClick={handleResetSliders}>
        RESET
      </Button>
    </Container>
  );
};