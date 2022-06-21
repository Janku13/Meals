import React from 'react';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../../restaurants/components/compact-resturant-info.component';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
