import { React, useState } from "react";
import { Add, Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { styled } from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import {ThemeProvider, createTheme} from "@mui/material/styles";

export default function App() {
  const [count, setCount] = useState(0);
  const [mode,setMode] = useState("light")
  
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  }) 

  return (
    // <Box>
    //   <Stack direction={"row"} spacing={2} >
    <ThemeProvider theme={darkTheme}>
    <Box>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    </ThemeProvider>
    //   {/* </Stack> */}
    // {/* </Box> */}
  );
}

