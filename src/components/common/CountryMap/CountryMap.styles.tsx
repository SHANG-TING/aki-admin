import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled((props) => <MapContainer {...props} />)`
  height: 100%;

  & .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
