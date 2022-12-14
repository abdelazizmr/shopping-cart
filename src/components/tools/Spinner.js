import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
     <Box sx={{ 
      display: 'flex', justifyContent:'center',alignItems:'center',
     width:'200px',height:'200px' }}>
      <CircularProgress />
    </Box>
  )
}

export default Spinner
