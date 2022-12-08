
import { CacheProvider } from "@emotion/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import App from "./App";
import createEmotionCache from "./style/emotionCache";
import baseTheme from "./style/themeOpts";
import Layout from "./components/Layout";


const emoCache = createEmotionCache();
const theme = createTheme(baseTheme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CacheProvider value={emoCache}>
      <CssBaseline />
      <Layout>
        <App />
      </Layout>
    </CacheProvider>
  </ThemeProvider>
);
