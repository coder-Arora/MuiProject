import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Post from "../components/Post";
import Rightnav from "../components/Rightnav";
import { Box, Stack,ThemeProvider,createTheme } from "@mui/material";
import Add from "../components/Add";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    < Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidenav setMode={setMode} mode={mode} />
        <Post />
        <Rightnav />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}
