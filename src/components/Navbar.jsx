import React from 'react'
import { AppBar, styled, Toolbar, Typography} from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Search } from '@mui/icons-material';
// import styled from '@mui/material'

const StyledToolbar= styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Navbar(){
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant="h6" 
        sx={{ display: 
        {
          xs: "none",
          sm: "block"
        }}}>
        Social App
        </Typography>
        <ColorLensIcon p={2} sx={{ display: 
        {
          xs: "block",
          sm: "none"
        }}}/>
        
      </StyledToolbar>
      <Search/>
      <MarkEmailUnreadIcon/>
    </AppBar>

  )
}
