import {
  Box,
  ButtonBase,
  Collapse,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // flexDirection: "column",
        }}
      >
        <Box
          sx={{
            gap: {
              xs: 0,
              md: 2,
            },
            display: "flex",
            alignItems: {
              xs: "start",
              md: "center",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Typography variant="h6">{project.title}</Typography>
          <Link
            rel="noopener"
            target="_blank"
            href={project.link}
            sx={{
              color: "#000",
              cursor: "pointer",
              textDecoration: "#FFE71B dotted underline",
            }}
          >
            {project.link}
          </Link>
        </Box>
        <ButtonBase disableRipple onClick={() => setExpanded((prev) => !prev)}>
          <Typography
            sx={{
              fontSize: 30,
            }}
          >
           {
             expanded ? "-" : "+"
           }
          </Typography>
        </ButtonBase>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          &#9733; {project.tech.join(", ")} &#9733;
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Divider sx={{ my: 1 }} />
        <Typography>{project.desc}</Typography>
      </Collapse>
    </Box>
  );
}

export default ProjectCard;
