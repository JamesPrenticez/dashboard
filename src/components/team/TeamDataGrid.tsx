import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, type GridColDef, type GridRowParams  } from '@mui/x-data-grid'
import { tokens } from '../../styles/theme'
import { mockDataTeam } from '../../constants/data/mockData'
import PageHeader from '../layout/PageHeader'
import { type ITeam } from "../../models";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import { useHexOpacity } from '../../hooks'

const TeamDataGrid = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const getHexOpacity = useHexOpacity()

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName:"name-column--cell"},
    { field: "age", headerName: "Age", type:"number", headerAlign: "left", align: "left"},
    { field: "phone", headerName: "Phone Number", flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "access", headerName: "Acess Level", flex: 1, 
    renderCell: ({ row: { access } }: { row: ITeam }) => {
      return (
        <Box display="flex" width="60%" borderRadius="4px" bgcolor={theme.palette.common.white}>
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            bgcolor={
              access === "admin" ? colors.redAccent[500] + getHexOpacity(40) :
              access === "manager" ? colors.greenAccent[500] + getHexOpacity(40) :
              colors.blueAccent[500] + getHexOpacity(40)
            }
            color={
              access === "admin" ? colors.redAccent[600] :
              access === "manager" ? colors.greenAccent[600] :
              colors.blueAccent[600]
            }
            borderRadius="4px"
            position="relative"
          >
            <Box position="absolute">
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}  
              {access === "manager" && <SecurityOutlinedIcon />}  
              {access === "user" && <LockOpenOutlinedIcon />} 
            </Box>
            <Typography textAlign="center" width="100%" sx={{textTransform: "capitalize"}} fontWeight={600}>
              {access}
            </Typography> 
          </Box>  
        </Box>  
      )
    }},
  ]

  return (
    <Box m="5px 0 0 0" height="75vh">
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
      />
    </Box>
  )
}

export default TeamDataGrid