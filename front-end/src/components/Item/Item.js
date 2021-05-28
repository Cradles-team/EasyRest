import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import StoreContext from "../../StoreContext";
import {
  CollapseItem,
  CollapseSection,
  ItemHero,
  ItemTitle,
  ItemWrapper,
  OverrideCollapse,
  RouteSection
} from "./Item.styled";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Collapse } from "antd";
import clock from "../../images/clock.svg";
import map from "../../images/map.svg";

const MapWithMarker = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 49.839975, lng: 24.030528 }}
  >
    <Marker position={{ lat: 49.842521, lng: 24.03153 }} />
  </GoogleMap>
));

const { Panel } = Collapse;

export const Item = props => {
  const { id } = useParams();
  const { data } = useContext(StoreContext);
  const item_element = data[id];
  return (
    <ItemWrapper>
      <ItemHero style={{ backgroundImage: `url(${item_element.photo})` }}>
        <ItemTitle>{item_element.name}</ItemTitle>
      </ItemHero>
      <CollapseSection>
        <CollapseItem>
          <img src={clock} alt="clock icon"/>
          <OverrideCollapse
            ghost
            style={{ width: "300px" }}
            expandIconPosition="right"
          >
            <Panel header="Графік роботи">{item_element.schedule}</Panel>
          </OverrideCollapse>
        </CollapseItem>
        <CollapseItem>
          <img src={map} alt="map icon"/>
          <OverrideCollapse
            ghost
            style={{ width: "400px" }}
            expandIconPosition="right"
          >
            <Panel header="Адреса">{item_element.address}</Panel>
          </OverrideCollapse>
        </CollapseItem>
      </CollapseSection>
      <RouteSection>Проклади маршрут до {item_element.name}</RouteSection>
      <MapWithMarker
        containerElement={<div style={{ height: "70vh", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
      />
    </ItemWrapper>
  );
};

export default Item;
