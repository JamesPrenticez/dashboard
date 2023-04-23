import React, { type ReactElement} from 'react'
import { Box, Typography, useTheme  } from '@mui/material'
import { tokens } from "../../styles/theme"
import { useHexOpacity } from '../../hooks';

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({title, subTitle}: PageHeaderProps): ReactElement => {
  const theme = useTheme()
  const getHexOpacity = useHexOpacity();

  return (
    <Box mb="30px">
      <Typography 
        variant='h2'
        color={theme.palette.text.primary}
        fontWeight="bold"
        marginBottom={"5px"}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color={theme.palette.text.accent + getHexOpacity(75)}
      >
        {subTitle}
      </Typography>
    </Box>
  )
}

export default PageHeader