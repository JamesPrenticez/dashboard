import React, { type ReactElement } from 'react'
import { Box } from '@mui/material'
import PageHeader from '../components/layout/PageHeader'
import TeamDataGrid from '../components/team/TeamDataGrid'

const Team = (): ReactElement => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="TEAM PERMISSIONS" subTitle='Manage team member permissions'/>
      </Box>

      <TeamDataGrid />
    </Box>
  )
}

export default Team