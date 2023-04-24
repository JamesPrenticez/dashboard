import React, { type ReactElement } from 'react'
import { Box } from '@mui/material'
import ContactsDataGrid from '../components/contacts/ContactsDataGrid'
import PageHeader from '../components/layout/PageHeader'

const Contacts = (): ReactElement => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader title="CONTACTS" subTitle='List of Contacts for Future Reference'/>
      </Box>

      <ContactsDataGrid />
    </Box>
  )
}

export default Contacts