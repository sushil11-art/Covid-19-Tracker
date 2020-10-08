import React from 'react';
import {Map as LeafletMap,TileLayer} from 'react-leaflet';
import '../css/Map.css';
import { showDataOnMap } from '../utils/util';

const Maps=({countries,center,zoom,casesType})=>{
  console.log(countries);
    return (
      <div className="map">
        <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {/* SHow data on map */}
      {showDataOnMap(countries,casesType)}
      </LeafletMap>
      </div>
    );
}

export default Maps;