import { LineChart } from "@mui/x-charts/LineChart";
import { Container, ChartContainer } from "./styles";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useLogic } from "./useLogic";
import { useState } from "react";
import { TabPanel } from "../TabPanel";
import { Plot3D } from "../Plot3D";

export const MotorInfo = () => {
  const {
    motorData,
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data,
    viewPositionData,
  } = useLogic();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="углы" />
          <Tab label="положение" />
          <Tab label="шим" />
          <Tab label="3D" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography
                variant="subtitle1"
                component="span"
                textAlign="center"
              >
                &#x398;1 (real): {motorData.realTheta1} PWM:{" "}
                {motorData.motor1PWM}
                <span style={{ float: "right" }}>
                  X: {motorData.x} Y: {motorData.y} Z: {motorData.z}
                </span>
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor1Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor1Data.specifiedAngle,
                    label: "Заданый угол (М1)",
                    showMark: false,
                  },
                  {
                    data: viewMotor1Data.realAngle,
                    label: "Значение угла с энкодера (М1)",
                    showMark: false,
                  },
                ]}
                skipAnimation={true}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                title="fefef"
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography
                variant="subtitle1"
                component="span"
                textAlign="center"
              >
                &#x398;1 (real): {motorData.realTheta2} PWM:{" "}
                {motorData.motor2PWM}
                <span style={{ float: "right" }}>
                  X: {motorData.x} Y: {motorData.y} Z: {motorData.z}
                </span>
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor2Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor2Data.specifiedAngle,
                    label: "Заданый угол (М2)",
                    showMark: false,
                  },
                  {
                    data: viewMotor2Data.realAngle,
                    label: "Значение угла с энкодера (М2)",
                    showMark: false,
                  },
                ]}
                skipAnimation={true}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography
                variant="subtitle1"
                component="span"
                textAlign="center"
              >
                &#x398;1 (real): {motorData.realTheta3} PWM:{" "}
                {motorData.motor3PWM}
                <span style={{ float: "right" }}>
                  X: {motorData.x} Y: {motorData.y} Z: {motorData.z}
                </span>
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor3Data.specifiedAngle,
                    label: "Заданый угол (М3)",
                    showMark: false,
                  },
                  {
                    data: viewMotor3Data.realAngle,
                    label: "Значение угла с энкодера (М3)",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography variant="body1" component="span" textAlign="center">
                Position X (real): {motorData.x}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "заданные значения X",
                    showMark: false,
                  },
                  {
                    data: viewMotor3Data.pwm,
                    label: "реальные значения X",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography variant="body1" component="span" textAlign="center">
                Position Y (real): {motorData.y}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "заданные значения Y",
                    showMark: false,
                  },
                  {
                    data: viewMotor3Data.pwm,
                    label: "реальные значения Y",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <Typography variant="body1" component="span" textAlign="center">
                Position Z (real): {motorData.z}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "заданные значения Z",
                    showMark: false,
                  },
                  {
                    data: viewMotor3Data.pwm,
                    label: "реальные значения Z",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ChartContainer>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor1Data.pwm,
                    label: "PWM (M1)",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor2Data.pwm,
                    label: "PWM (M2)",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12}>
            <ChartContainer>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM (M3)",
                    showMark: false,
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
                skipAnimation={true}
              />
            </ChartContainer>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Plot3D />
      </TabPanel>
    </Container>
  );
};
