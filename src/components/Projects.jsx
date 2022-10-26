import { Box, Typography } from '@mui/material';

import projectData from '../assets/projectData.js';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          lg: 550,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
        }}
      >
        my projects
      </Typography>

      {projectData.map((project) => {
        return (
          <Box key={project.title}>
            <ProjectCard project={project} />
          </Box>
        );
      })}
    </Box>
  );
}

export default Projects;
