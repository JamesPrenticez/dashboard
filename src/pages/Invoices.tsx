import React, { type ReactElement } from 'react'
import { Box } from '@mui/material'
import InvoicesDataGrid from '../components/invoices/InvoicesDataGrid'
import PageHeader from '../components/layout/PageHeader'

const Invoices = (): ReactElement => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="INVOICES" subTitle='List of Invoice Balances'/>
      </Box>

      <InvoicesDataGrid />
    </Box>
  )
}

export default Invoices