import { Box, Typography } from "@mui/material";

import projectData from "../assets/projectData.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: {
          lg: 1300,
        },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        my projects
      </Typography>

      {projectData.map((project) => {
        return (
          <Box
            key={project.title}
            sx={{
              mb: 1,
            }}
          >
            <ProjectCard project={project} />
          </Box>
        );
      })}
    </Box>
  );
}

export default Projects;
