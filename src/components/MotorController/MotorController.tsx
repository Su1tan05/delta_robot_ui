import { Box, Button, Slider, Tab, Tabs, Typography } from "@mui/material";
import { Container, SliderContainer } from "./styles";
import { useLogic } from "./useLogic";
import { SliderHandlerTypes } from "./enum";
import { useState } from "react";
import { TabPanel } from "../TabPanel";

export const MotorController = () => {
  const {
    handleResetSliders,
    getSliderChangeHandler,
    sliderXValue,
    sliderYValue,
    sliderZValue,
    sliderM1Value,
    sliderM2Value,
    sliderM3Value,
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
            <Tab label="Управление положением" />
            <Tab label="Управление углами" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SliderContainer>
            <Box>
              <Typography variant="body1" component="span">
                X
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                style={{ width: "100%" }}
                aria-label="Small"
                max={100}
                min={-100}
                value={sliderXValue ?? 0}
                valueLabelDisplay="auto"
                onChange={
                  getSliderChangeHandler(SliderHandlerTypes.PostionX_slider)
                    .ChangeHangler
                }
                onChangeCommitted={
                  getSliderChangeHandler(SliderHandlerTypes.PostionX_slider)
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
                style={{ width: "100%" }}
                max={100}
                min={-100}
                value={sliderYValue ?? 0}
                valueLabelDisplay="auto"
                onChange={
                  getSliderChangeHandler(SliderHandlerTypes.PostionY_slider)
                    .ChangeHangler
                }
                onChangeCommitted={
                  getSliderChangeHandler(SliderHandlerTypes.PostionY_slider)
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
                defaultValue={-260}
                aria-label="Small"
                style={{ width: "100%" }}
                max={-200}
                min={-400}
                value={sliderZValue ?? 0}
                valueLabelDisplay="auto"
                onChange={
                  getSliderChangeHandler(SliderHandlerTypes.PostionZ_slider)
                    .ChangeHangler
                }
                onChangeCommitted={
                  getSliderChangeHandler(SliderHandlerTypes.PostionZ_slider)
                    .ChangeCommitHandler
                }
              />
            </Box>
          </SliderContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SliderContainer>
            <Box>
              <Typography variant="body1" component="span">
                &#x398;1
              </Typography>
              <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                style={{ width: "100%" }}
                max={100}
                min={-100}
                value={sliderM1Value ?? 0}
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
                style={{ width: "100%" }}
                max={100}
                min={-100}
                value={sliderM2Value ?? 0}
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
                style={{ width: "100%" }}
                max={100}
                min={-100}
                value={sliderM3Value ?? 0}
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
        </TabPanel>
      </Box>
      <Button variant="outlined" onClick={handleResetSliders}>
        RESET
      </Button>
    </Container>
  );
};