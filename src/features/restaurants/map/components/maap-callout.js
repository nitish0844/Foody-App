import React from "react";
import { CompactRestaurantInfo } from "../../../../components/restaurants/compact-restaurant-info";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
