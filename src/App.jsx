import { useState } from "react";
import { Add, Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { styled } from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Box>
    //   <Stack direction={"row"} spacing={2} >
    <Box>
      <Navbar/>
      <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    //   {/* </Stack> */}
    // {/* </Box> */}
  );
}

export default App;
