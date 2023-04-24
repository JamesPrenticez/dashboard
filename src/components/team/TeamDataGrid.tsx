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

const TeamDataGrid = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName:"name-column--cell"},
    { field: "age", headerName: "Age", type:"number", headerAlign: "left", align: "left"},
    { field: "phone", headerName: "Phone Number", flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "access", headerName: "Acess Level", flex: 1, 
    renderCell: ({ row: { access } }: { row: ITeam }) => {
      return (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          bgcolor={
            access === "admin"
            ? colors.greenAccent[600]
            : colors.greenAccent[600]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}  
          {access === "manager" && <SecurityOutlinedIcon />}  
          {access === "user" && <LockOpenOutlinedIcon />} 
          <Typography color={theme.palette.text.white} marginLeft={"5px"}>
            {access}
          </Typography> 
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