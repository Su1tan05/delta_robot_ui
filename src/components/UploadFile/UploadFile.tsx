import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useLogic } from "./useLogic";
import { AttachDescription, CancelIcon, VisuallyHiddenInput } from "./styles";

export const UploadFile = () => {
  const {
    fileName,
    handleAttachFile,
    handleUploadFile,
    hasAttachedFile,
    handleDetachFile,
  } = useLogic();
  return (
    <Box>
      <Typography variant="h6" gutterBottom textAlign={"center"}>
        Загрузка файла с траекторией
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            gap={2}
          >
            <Button
              variant="contained"
              component="label"
              sx={{
                flexShrink: 0,
              }}
            >
              Приложить файл
              <VisuallyHiddenInput
                type="file"
                hidden
                onChange={handleAttachFile}
              />
            </Button>

            {hasAttachedFile && (
              <AttachDescription>
                <Typography variant="body1" color="#8f9491" noWrap>
                  {fileName}
                </Typography>

                <IconButton onClick={handleDetachFile} disableRipple>
                  <CancelIcon />
                </IconButton>
              </AttachDescription>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="span">
            Формат файла - .json
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
