import React from 'react'
import { Badge, Stack, Card } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import PreviewIcon from '@mui/icons-material/Preview'
export const Badges = ({ state, setState }) => {
  return (
    <Card sx={{ maxWidth: 745 }}>
      <Stack
        direction={'row'}
        margin={3}
        width={'100%'}
        paddingX={8}
        spacing={6}
      >
        <Badge color='info' badgeContent={state.view}>
          <PreviewIcon color='info' fontSize={'large'} />
        </Badge>
        <Badge color='info' badgeContent={state.good}>
          <ThumbUpAltIcon color='success' fontSize={'large'} />
        </Badge>
        <Badge color='secondary' badgeContent={state.bad}>
          <ThumbDownAltIcon fontSize={'large'} color='error' />
        </Badge>
      </Stack>
    </Card>
  )
}
