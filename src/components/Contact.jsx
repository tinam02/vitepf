import { Box, Link, SvgIcon, Typography } from "@mui/material";

import Linkedin from "../assets/icons/Linkedin";
import Mail from "../assets/icons/Mail";
import Resume from "../assets/icons/Resume";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        rel="noopener"
        target="_blank"
      href="/Tina_M.pdf"
      download
>
        <SvgIcon
          sx={{
            color: "black",
            fontSize: 30,
          }}
          titleAccess="Resume"
        >
          <Resume />
        </SvgIcon>
      </Link>
      <Typography
        sx={{
          fontSize: 30,
        }}
      >
        •
      </Typography>
      <Link rel="noopener" target="_blank" href="mailto:oge612@gmail.com">
        <SvgIcon
          sx={{
            color: "black",
            fontSize: 30,
          }}
          titleAccess="Email"
        >
          <Mail />
        </SvgIcon>
      </Link>
      <Typography
        sx={{
          fontSize: 30,
        }}
      >
        •
      </Typography>
      <Link
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/tina333/"
      >
        <SvgIcon
          sx={{
            color: "black",
            fontSize: 31,
          }}
          titleAccess="LinkedIn"
        >
          <Linkedin />
        </SvgIcon>
      </Link>
    </Box>
  );
}

export default Contact;
