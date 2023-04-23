import React, { type ReactElement } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { getPredefinedColor } from "../../hooks";
import { tokens } from "../../styles/theme";
import { user } from "../../constants"

const UserAvatar = (): ReactElement => {
  const theme = useTheme();
  const colors =  tokens(theme.palette.mode)


  if (user) {
    return (
      <Box mb="25px">
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          {/* AVATAR */}
          <Avatar
            alt="profile picture"
            src=""
            sx={{
              width:"100px",
              height:"100px",
              color: theme.palette.text.white,
              bgcolor: getPredefinedColor(`${user.initials}`),
              cursor: "pointer"
            }}
          >
            <Typography variant="h1" fontWeight={700}>
              {user.initials}
            </Typography>
          </Avatar>

          {/* USERNAME */}
          <Typography
            variant="h3"
            color={theme.palette.text.primary}
            fontWeight="bold"
            sx={{
              m: "10px 0 0 0"
            }}
          >
            {user.firstname} {user.lastname}
          </Typography>

          {/* USER ROLE */}
          <Typography
            variant="h5"
            color={theme.palette.text.accent}
            fontWeight="bold"
            sx={{
              m: "10px 0 0 0"
            }}
          >
            {user.role}
          </Typography>
        </Box>
      </Box>
    )
  }
  return <Box />;
};

export default UserAvatar;