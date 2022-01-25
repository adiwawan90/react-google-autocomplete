import * as React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DetailLocation = () => {
  const state = useSelector(s => s);

  return (
    <>
      <Box sx={{maxWidth: 300, color: '#270082', marginTop: 2}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}} >
          <Typography variant="subtitle2" gutterBottom>
            Address:
          </Typography>
          <Typography variant="overline" gutterBottom>
            {state?.address}
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}} >
          <Typography variant="subtitle2" gutterBottom>
            PlaceId:
          </Typography>
          <Typography variant="overline" gutterBottom>
            {state?.fullAddress?.place_id}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default DetailLocation;