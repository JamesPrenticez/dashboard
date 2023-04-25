import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, type GridColDef, type GridRowParams, type GridRenderCellParams  } from '@mui/x-data-grid'
import { tokens } from '../../styles/theme'
import { mockDataInvoices } from '../../constants/data/mockData'
import PageHeader from '../layout/PageHeader'
import { type IInvoices } from "../../models";

import { useHexOpacity, useCurrencyFormatter } from '../../hooks'

const InvoicesDataGrid = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const getHexOpacity = useHexOpacity()
  const currencyFormatter = useCurrencyFormatter()

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5},
    { field: "name", headerName: "Name", flex: 1, cellClassName:"name-column--cell"},
    { field: "phone", headerName: "Phone Number", flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "date", headerName: "Date", flex: 1},
    { field: "cost", headerName: "Cost", flex: 1, 
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography 
          // color={theme.palette.text.accent}
          color={colors.greenAccent[500]}
          fontWeight={700}
        >
          {currencyFormatter.format((params.row as IInvoices).cost)}
        </Typography>
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
        // "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        //   color: `${theme.palette.text.primary} !important`
        // },
        "& .MuiDataGrid-columnSeparator": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus": {
          outline: "none !important",
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
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[500]} !important`
        },
      }}
    >
      <DataGrid
        columnHeaderHeight={50}
        hideFooterPagination={true}
        rows={mockDataInvoices}
        columns={columns}
        checkboxSelection={true}
      />
    </Box>
  )
}

export default InvoicesDataGrid