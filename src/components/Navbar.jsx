import React, { useState } from "react";
import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { ExpandMoreRounded, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-center",
  marginInline: "40px",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(true);
  const [less, setLess] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Social App
        </Typography>
        <ColorLensIcon
          p={2}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Searchbar>
          {" "}
          <InputBase placeholder="search your query....." />{" "}
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
            src="data:image/jpeg;base64,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"
          />
          <ExpandMoreRounded
            onClick={(r) => {
              setMore(false);
              setLess(true);
            }}
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
