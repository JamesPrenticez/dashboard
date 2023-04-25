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
    { field: "access", headerName: "Acess Level", headerAlign: "center", align: "center", flex: 1, 
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
    <Box 
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.purpleAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          paddingY: "2px",
          fontWeight: 700,
          fontSize: 14,
          userSelect: "none"
        },
        "& .MuiDataGrid-columnSeparator": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus": {
          outline: "none !important",
        },
        "& .name-column--cell": {
          color: colors.purpleAccent[300]
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.purpleAccent[700]
        },
        "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
          outline: "none !important",
        },
        "& .MuiDataGrid-root .MuiDataGrid-row:hover": {
          backgroundColor: colors.primary[500],
        },
        "& .MuiDataGrid-root .MuiDataGrid-row.Mui-selected": {
          backgroundColor: colors.primary[500],
        },
        "& .MuiDataGrid-root .MuiDataGrid-row:active": {
          backgroundColor: colors.primary[500],
        }
      }}
    >
      <DataGrid
        columnHeaderHeight={50}
        hideFooterPagination={true}
        rows={mockDataTeam}
        columns={columns}
      />
    </Box>
  )
}

export default TeamDataGrid