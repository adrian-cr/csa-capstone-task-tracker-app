import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box >
      <Box
        sx={{
          backgroundColor: '#fdfdfddf',
          color: 'white',
          height: '100px',
          textAlign: 'center',

        }}
      >
        <Link to="/">
          <img src="/images/logo.png" style={{width: "200px"}}></img>
        </Link>
      </Box>
    </Box>
  )
}
