import { LineChart } from "@mui/x-charts/LineChart";
import { Container, ChartContainer } from "./styles";
import { Grid, Typography } from "@mui/material";
import { useLogic } from "./useLogic";

export const MotorInfo = () => {
  const {
    motor1Monitoring,
    motor2Monitoring,
    motor3Monitoring,
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data,
  } = useLogic();
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor1 angle (real): {motor1Monitoring.y}
            </Typography>
            <LineChart
              xAxis={[{ data: viewMotor1Data.time }]}
              yAxis={[{ min: -150, max: 150 }]}
              series={[
                {
                  data: viewMotor1Data.specifiedAngle,
                  label: 'Заданый угол'
                },
                {
                  data: viewMotor1Data.realAngle,
                  label: 'Значение угла с энкодера'
                },
              ]}
              skipAnimation = {true}
              height={300}
              margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </ChartContainer>
        </Grid>
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor2 angle (real): {motor2Monitoring.y}
            </Typography>
            <LineChart
              xAxis={[{ data: viewMotor2Data.time }]}
              yAxis={[{ min: -150, max: 150 }]}
              series={[
                {
                  data: viewMotor2Data.specifiedAngle,
                  label: 'Заданый угол'
                },
                {
                  data: viewMotor2Data.realAngle,
                  label: 'Значение угла с энкодера'
                },
              ]}
              skipAnimation = {true}
              height={300}
              margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </ChartContainer>
        </Grid>
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor3 angle (real): {motor3Monitoring.y}
            </Typography>
            <LineChart
              xAxis={[{ data: viewMotor3Data.time }]}
              yAxis={[{ min: -150, max: 150 }]}
              series={[
                {
                  data: viewMotor3Data.specifiedAngle,
                  label: 'Заданый угол'
                },
                {
                  data: viewMotor3Data.realAngle,
                  label: 'Значение угла с энкодера'
                },
              ]}
              height={300}
              margin={{ left: 30, right: 30, top: 15, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
              skipAnimation = {true}
            />
          </ChartContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
