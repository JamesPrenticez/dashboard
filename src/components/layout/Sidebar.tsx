import React, { useState, type ReactElement } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu, useProSidebar, MenuItemStyles } from "react-pro-sidebar"
import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material"
import { tokens } from "../../styles/theme"
import { navigationItems } from "../../constants/index"

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import UserAvatar from './Avatar';
import Logo from './Logo';
import { useHexOpacity } from '../../hooks';

const Sidebar = (): ReactElement => {
  const theme = useTheme();
  const colors =  tokens(theme.palette.mode)
  const getHexOpacity = useHexOpacity();
  const { collapseSidebar, collapsed } = useProSidebar();

  const menuItemStyles: MenuItemStyles = {
    button: ({ level, active, disabled }) => {
      if (level === 0)
        return {
            borderLeft: "solid 3px transparent",
          '&:hover': {
            backgroundColor: colors.primary[500],
            borderColor: colors.greenAccent[500]
          },
        };
    },
  };
  
  return (
    <Box display="flex" height="100%">
    <ProSidebar backgroundColor={colors.primary[400]}
      rootStyles={{
        borderColor: colors.greenAccent[500] + getHexOpacity(50),
      }}
    >
      <Menu menuItemStyles={menuItemStyles}>

        {/* SIDEBAR HEADER - LOGO AND COLLAPSE TOGGLE */}
        <Box
          display="flex"
          m="10px 0 20px 0"
          color={theme.palette.text.primary}
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
          <Box margin="5px auto 0 auto">
            <IconButton onClick={() => collapseSidebar(!collapsed)} sx={{color: "inherit"}} >
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
              color={theme.palette.text.primary}
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
                      color: theme.palette.text.primary,
                      backgroundColor: isActive ? colors.primary[500] : '',
                      borderColor: isActive ? colors.greenAccent[500] : ''
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