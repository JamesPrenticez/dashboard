import React from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar, type GridColDef, type GridRowParams  } from '@mui/x-data-grid'
import { tokens } from '../../styles/theme'
import { mockDataContacts } from '../../constants/data/mockData'
import PageHeader from '../layout/PageHeader'
import { type ITeam } from "../../models";

import { useHexOpacity } from '../../hooks'

const ContactsDataGrid = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const getHexOpacity = useHexOpacity()

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5},
    { field: "registrarId", headerName: "Registrar ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName:"name-column--cell"},
    { field: "age", headerName: "Age", type:"number", headerAlign: "left", align: "left"},
    { field: "phone", headerName: "Phone Number", flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "address", headerName: "Address", flex: 1},
    { field: "city", headerName: "City", flex: 1},
    { field: "zipCode", headerName: "Zip Code", flex: 1},
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
          fontSize: 14
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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.text.primary} !important`
        }
      }}
    >
      <DataGrid
        columnHeaderHeight={50}
        hideFooterPagination={true}
        rows={mockDataContacts}
        columns={columns}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </Box>
  )
}

export default ContactsDataGrid