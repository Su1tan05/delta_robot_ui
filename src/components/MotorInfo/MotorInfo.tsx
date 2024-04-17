import { LineChart } from "@mui/x-charts/LineChart";
import { Container, ChartContainer } from "./styles";
import { Grid, Typography } from "@mui/material";
import { useLogic } from "./useLogic";


export const MotorInfo = () => {
  const { motor1Monitoring, motor2Monitoring, motor3Monitoring, viewMotor1Data} = useLogic();
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor1 info: {motor1Monitoring.y}
              {/* Motor1 circleArray: {JSON.stringify(viewMotor1Data)} */}
            </Typography>
            <LineChart
              xAxis={[{ data: viewMotor1Data.time}]}
              series={[
                {
                  data: viewMotor1Data.angle,
                },
              ]}
              height={150}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </ChartContainer>
        </Grid>
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor2 info: {motor2Monitoring.y}
            </Typography>

            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 11] }]}
              series={[
                {
                  data: [1, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={150}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </ChartContainer>
        </Grid>
        <Grid item xs={4}>
          <ChartContainer>
            <Typography variant="body1" component="span" textAlign="center">
              Motor3 info: {Math.trunc(motor3Monitoring.z)}
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 11] }]}
              series={[
                {
                  data: [1, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={150}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </ChartContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
