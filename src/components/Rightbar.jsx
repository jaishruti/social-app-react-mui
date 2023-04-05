import React from 'react'
import { Box} from '@mui/material'

export default function Sidebar(){
  return (
    <Box backgroundColor="#5fbbc7" flex={1} p={2}
    sx={{
      display:{
          xs: "none",
          sm: "block"
      }
  }}>Rightbar</Box>
  )
}
