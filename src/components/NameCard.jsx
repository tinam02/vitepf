import { Box, Typography } from "@mui/material";

function NameCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: {
          lg: 550,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          hi, i'm
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            opacity: 1,
            textDecoration: "#FFE71B wavy underline",
          }}
        >
          Tina.
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: 24,
        }}
      >
        frontend developer
      </Typography>
    </Box>
  );
}

export default NameCard;
