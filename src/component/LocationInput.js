import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

import { useSelector, useDispatch } from 'react-redux';

import { setOpen } from '../redux/action';

const Map = () => {
  const state = useSelector(s => s);
  const dispatch = useDispatch();

  const handleToggleOpen = () => {
    dispatch(setOpen());
  };

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap defaultCenter={state.coords} defaultZoom={13}>
      <Marker
        key={props.index}
        position={state.coords}
        onClick={() => handleToggleOpen()}
      >
        {state.isOpen && (
          <InfoWindow
            onCloseClick={props.handleCloseCall}
            options={{ maxWidth: 100 }}
          >
            <span>This is InfoWindow message!</span>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ));

  return (
    <GoogleMapExample
      containerElement={<div style={{ height: `500px`, width: '500px' }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Map;