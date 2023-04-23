import React, { type ReactElement } from 'react'
import { Box } from '@mui/material'
import PageHeader from '../components/layout/PageHeader'

const Team = (): ReactElement => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="TEAM" subTitle='Our passionate team at Group Data Analytics'/>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#1ABC9C"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#32A852"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#1A8006"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#D46A7E"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#E74C3C"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#FECE44"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#9B59B6"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#F1C40F"></Box>
        <Box height="50px" width="50px" borderRadius="100%" bgcolor="#34495E"></Box>
      </Box>
    </Box>
  )
}

export default Team