import React, { type ReactElement } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { Box } from '@mui/material'

const Dashboard = (): ReactElement => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="DASHBOARD" subTitle='Welcome to you&apos;re dashboard'/>
      </Box>
    </Box>
  )
}

export default Dashboard