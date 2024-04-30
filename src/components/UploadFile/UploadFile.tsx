import { Button, Grid, Typography } from "@mui/material";

export const UploadFile = () => {
  return (
    <Typography variant="h6" gutterBottom textAlign={"center"}>
      Загрузка файла с траекторией
      <Grid>
        <Grid item xs={12}>
          <Button variant="contained" component="label">
             Приложить файл
            <input type="file" hidden />
          </Button>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" component="span">
          Формат файла - .csv
          </Typography>
        </Grid>
      </Grid>
    </Typography>
  );
};