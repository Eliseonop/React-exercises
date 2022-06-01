import React from 'react'
import { Link, Typography } from '@mui/material'
export default function CpyRight () {
  return (
    <div>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link href='google.com'>Google</Link>
      </Typography>
    </div>
  )
}
