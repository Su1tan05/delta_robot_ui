import { LineChart } from "@mui/x-charts/LineChart";
import { Container, ChartContainer } from "./styles";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useLogic } from "./useLogic";
import { useState } from "react";
import { TabPanel } from "../TabPanel";
import { Plot3D } from "../Plot3D";

export const MotorInfo = () => {
  const { motorData, viewMotor1Data, viewMotor2Data, viewMotor3Data } =
    useLogic();

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
              <Typography variant="body1" component="span" textAlign="center">
                Motor1 angle (real): {motorData.realTheta1}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor1Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor1Data.specifiedAngle,
                    label: "Заданый угол",
                    showMark: false,
                  },
                  {
                    data: viewMotor1Data.realAngle,
                    label: "Значение угла с энкодера",
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
              <Typography variant="body1" component="span" textAlign="center">
                Motor2 angle (real): {motorData.realTheta2}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor2Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor2Data.specifiedAngle,
                    label: "Заданый угол",
                    showMark: false,
                  },
                  {
                    data: viewMotor2Data.realAngle,
                    label: "Значение угла с энкодера",
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
              <Typography variant="body1" component="span" textAlign="center">
                Motor3 angle (real): {motorData.realTheta3}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -150, max: 150 }]}
                series={[
                  {
                    data: viewMotor3Data.specifiedAngle,
                    label: "Заданый угол",
                    showMark: false,
                  },
                  {
                    data: viewMotor3Data.realAngle,
                    label: "Значение угла с энкодера",
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
                Position X (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
                Position Y (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
                Position Z (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
              <Typography variant="body1" component="span" textAlign="center">
                Motor1 PWM (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
                Motor2 PWM (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
                Motor3 PWM (real): {motorData.motor3PWM}
              </Typography>
              <LineChart
                xAxis={[{ data: viewMotor3Data.time }]}
                yAxis={[{ min: -1, max: 1 }]}
                series={[
                  {
                    data: viewMotor3Data.pwm,
                    label: "PWM",
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
