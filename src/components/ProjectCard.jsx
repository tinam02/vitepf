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
        }}
      >
        <Box
          sx={{
            gap: {
              xs: 0,
              sm: 2,
            },
            display: "flex",
            alignItems: {
              xs: "start",
              sm: "center",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Typography variant="h6">{project.title}</Typography>
          <Link
            rel="noopener"
            target="_blank"
            href={project.link}
            sx={{
              color: {
                xs: "#000",
                sm: "#fff",
              },
              cursor: "pointer",
              textDecoration: "#000 dotted underline",
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
            {expanded ? "-" : "+"}
          </Typography>
        </ButtonBase>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            opacity: 0.7,
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          &#9733; {project.tech.join(", ")} &#9733;
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Divider sx={{ my: 1 }} />
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              sm: 14,
              md: 16,
            },
            whiteSpace: "pre-wrap",
          }}
        >
          {project.desc}
        </Typography>
      </Collapse>
    </Box>
  );
}

export default ProjectCard;
