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
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c70b0dd6-bbe9-49ea-a43d-f4f10654f872"
      >
        <SvgIcon
          sx={{
            color: "black",
            fontSize: 40,
          }}
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
            fontSize: 40,
          }}
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
        href="https://www.linkedin.com/in/tina-milosavljevic-2454931b9/"
      >
        <SvgIcon
          sx={{
            color: "black",
            fontSize: 40,
          }}
        >
          <Linkedin />
        </SvgIcon>
      </Link>
    </Box>
  );
}

export default Contact;
