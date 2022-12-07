import { Box } from "@mui/material";
import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function Object3D() {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
      <Spline scene="https://prod.spline.design/YqcpGrkdALDhbu5T/scene.splinecode" />
      </Suspense>
    </Box>
  );
}

export default Object3D;
