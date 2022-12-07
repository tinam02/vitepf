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
            borderRadius: 5,
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
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
