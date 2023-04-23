import React, { type ReactElement } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { getRandomPredefinedColor } from "../../utils/getRandomPredefinedColor";
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
              color: "white",
              bgcolor: getRandomPredefinedColor(`${user.initials}`),
              cursor: "pointer"
            }}
          >
            <Typography variant="h1" fontWeight={600}>
              {user.initials}
            </Typography>
          </Avatar>

          {/* USERNAME */}
          <Typography
            variant="h3"
            color={colors.grey[100]}
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
            color={colors.greenAccent[500]}
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