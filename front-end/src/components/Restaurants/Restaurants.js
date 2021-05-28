import React from "react";
import { RestaurantsPage, RestaurantsWrapper } from "./Restaurants.styled";
import StoreContext from "../../StoreContext";
import { Restaurant } from "./Restaurant/Restaurant";
import Search from "./Search/Search";

export const Restaurants = () => {
  return (
    <StoreContext.Consumer>
      {({ dataArr }) => (
        <RestaurantsPage>
          <Search />
          <RestaurantsWrapper>
            {dataArr.map(
              ({
                id,
                name,
                image,
                photo,
                coordinates,
                logo,
                schedule,
                address
              }) => (
                <Restaurant
                  id={id}
                  key={id}
                  name={name}
                  image={image}
                  photo={photo}
                  coordinates={coordinates}
                  logo={logo}
                  schedule={schedule}
                  address={address}
                />
              )
            )}
          </RestaurantsWrapper>
        </RestaurantsPage>
      )}
    </StoreContext.Consumer>
  );
};

export default Restaurants;
