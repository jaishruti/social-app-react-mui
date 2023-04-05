import React from 'react'
import { Box } from "@mui/material"

export default function Sidebar(){
    return(
        <Box backgroundColor="yellow" flex={0.75} p={2}
        sx={{
            display:{
                xs: "none",
                sm: "block"
            }
        }}> Sidebar</Box>
    );
}