import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Map as BaseMap, TileLayer, ZoomControl } from "react-leaflet";

import {
  useConfigureLeaflet,
  useMapServices,
  useRefEffect,
} from "../../../hooks";
import { isDomAvailable } from "../../../lib/utils";
import styled from "styled-components";

const MapLoading = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: $blue-grey-200;
  font-family: $font-default;
  width: 100%;
  height: 4em;
  line-height: 4em;
  text-align: center;
  margin: auto;
`;

const Map = (props) => {
  const {
    children,
    className,
    defaultBaseMap = "OpenStreetMap",
    mapEffect,
    ...rest
  } = props;

  const mapRef = useRef();

  useConfigureLeaflet();

  useRefEffect({
    ref: mapRef,
    effect: mapEffect,
  });

  const services = useMapServices({
    names: ["OpenStreetMap"],
  });
  const basemap = services.find((service) => service.name === defaultBaseMap);

  let mapClassName = `map`;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  if (!isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <MapLoading>Loading map...</MapLoading>
      </div>
    );
  }

  const mapSettings = {
    className: "map-base",
    zoomControl: false,
    ...rest,
  };

  return (
    <div className={mapClassName}>
      <BaseMap ref={mapRef} {...mapSettings}>
        {children}
        {basemap && <TileLayer {...basemap} />}
        <ZoomControl position="bottomright" />
      </BaseMap>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
};

export default Map;
