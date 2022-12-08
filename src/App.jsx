import { Box, Container, Divider } from "@mui/material";
import Contact from "./components/Contact";

import NameCard from "./components/NameCard";
import Object3D from "./components/Object3D";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          p: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            p: 2,
            gap: 3,
            display: "flex",
            borderRadius: "50px 20px 60px 30px",
            animation: "border-radius 3s ease-in-out infinite alternate ",
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
          }}
        >
          <NameCard />
          <Divider flexItem />
          <Projects />
          <Contact />
        </Box>
      </Container>

      <Object3D />
    </>
  );
}

export default App;
