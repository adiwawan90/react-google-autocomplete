import { withScriptjs, withGoogleMap } from 'react-google-maps';

import Searchbox from './component/Searchbox';
import Map from './component/LocationInput';
import Detail from './component/DetailLocation';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  
  const Layout = () => {
    return (
      <Box sx={{ bgcolor: '#4FBDBA', height: '100vh' }}>
        <Container maxWidth="lg" sx={{paddingTop: 5}}>
          <Typography variant="h3" color="#1A1A40" sx={{textAlign: 'center'}} >
            Simple Google Place Autocomplete
          </Typography>;
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{display: 'flex', p: 1, borderRadius: 1}}
            >
              <Box>
                <Searchbox />
                <Detail></Detail>
              </Box>
              <Box sx={{ flexGrow: 1, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Map
                  containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }
  
  const MapLoader = withScriptjs(withGoogleMap(Layout));

  return (
    <MapLoader
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default App;
