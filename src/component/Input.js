import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import PlacesAutocomplete, {
} from 'react-places-autocomplete';
import { useSelector } from 'react-redux';

export default function CustomizedInputBase({ onChange, onSelect }) {
  const state = useSelector(s => s);

  return (
    <div>
      <PlacesAutocomplete
          value={state.address}
          onChange={onChange}
          onSelect={onSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent : 'center', justifySelf: 'center', width: 400 }}
              > 
                <IconButton sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input'
                  })}
                />
              </Paper>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  console.log("SUDGGEST", suggestion);
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                      key={suggestion.placeId}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
    </div>
  );
}