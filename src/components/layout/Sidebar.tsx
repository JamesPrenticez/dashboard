import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu, useProSidebar, MenuItemStyles } from "react-pro-sidebar"
import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material"
import { tokens } from "../../styles/theme"
import { navigationItems } from "../../constants/index"

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import UserAvatar from './Avatar';
import Logo from './Logo';

const Sidebar = () => {
  const theme = useTheme();
  const colors =  tokens(theme.palette.mode)
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard")

  const menuItemStyles: MenuItemStyles = {
    button: ({ level, active, disabled }) => {
      if (level === 0)
        return {
          '&:hover': {
            color: "#F8F8F8 !important",
            backgroundColor: colors.greenAccent[500],
          },
        };
    },
  };
  
  return (
    <Box display="flex" height="100%">
    <ProSidebar backgroundColor={colors.primary[400]}
      rootStyles={{
        borderColor: colors.greenAccent[500] + "90",
      }}
    >
      <Menu menuItemStyles={menuItemStyles}>

        {/* SIDEBAR HEADER - LOGO AND COLLAPSE TOGGLE */}
        <Box
          display="flex"
          m="10px 0 20px 0"
          color={colors.grey[100]}
        >
          {!collapsed && (
            <Box
              component={Link}
              to={"/"}
              display="flex"
              flex={1}
              ml="15px"
              sx={{
                cursor: "pointer"
              }}
            >
              <Logo width={32}/>
            </Box>
          )}
          <Box margin="0 auto">
            <IconButton onClick={() => collapseSidebar(!collapsed)}>
              {collapsed ? (
                <MenuOutlinedIcon sx={{fontSize: "24px"}}/>
                ) : (
                <KeyboardArrowLeftOutlinedIcon  sx={{fontSize: "24px"}} />
              )}
            </IconButton>
          </Box>

        </Box>

        {/* USER AVARTAR */}
        {!collapsed && (
          <UserAvatar />
        )}

        {/* NAVIGATION ITEMS */}
        {navigationItems.map((group, index) => (
          <Box key={`${group.name} ${index}`}>
            <Typography 
              variant="body2"
              fontWeight={600}
              m="0 0 5px 15px"
              color={colors.primary[100]}
              sx={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
            >
              {group.name}
            </Typography>
            { group.items && group.items.map((item, index) => (
              <MenuItem
                key={`${item.name} ${index}`}
                icon={item.icon}
                component={
                  <NavLink 
                    to={item.url}
                    style={({ isActive }) => ({
                      padding: '5px 35px 5px 20px',
                      color: isActive ? colors.white[100] : colors.primary[100],
                      backgroundColor: isActive ? colors.greenAccent[500] : '',

                    })}
                  />}
              > 
                {item.name}
              </MenuItem>
            ))}
          </Box>
        ))}
      </Menu>
    </ProSidebar>
  </Box>
  )
}

export default Sidebar