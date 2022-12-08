import { Box, Container, Divider, useMediaQuery } from "@mui/material";
import Contact from "./components/Contact";

import NameCard from "./components/NameCard";
import Object3D from "./components/Object3D";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  const matches = useMediaQuery("(min-width:500px)");
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          p: {
            xs: 0,
            sm: 2,
            md: 4,
          },
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            p: 2,
            gap: 3,
            display: "flex",
            borderRadius: {
              xs: 0,
              sm: "50px 20px 60px 30px",
            },
            animation: {
              xs: "none",
              sm: "border-radius 3s ease-in-out infinite alternate",
            },
            "@keyframes border-radius": {
              "0%": {
                borderRadius: "50px 20px 60px 30px",
              },

              "100%": {
                borderRadius: "10px",
              },
            },

            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0px 0px 18px 0px rgba(255,255,255,0.35)",
            height: matches ? "auto" : "100vh",
          }}
        >
          <NameCard />
          <Divider flexItem />
          <Projects />
          <Contact />
        </Box>
      </Container>
      {matches && <Object3D />}
    </>
  );
}

export default App;
