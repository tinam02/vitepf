import { Box, Typography } from "@mui/material";

function NameCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
            textDecoration: "#fff wavy underline",
          }}
        >
          Tina
        </Typography>
      </Box>
      <Typography>i'm a frontend developer</Typography>
      <Typography
        sx={{
          fontSize: 14,
          opacity: 0.6,
          fontFamily: "monospace",
        }}
      >
        oge612@gmail.com • 060/70 20 696
      </Typography>
    </Box>
  );
}

export default NameCard;
