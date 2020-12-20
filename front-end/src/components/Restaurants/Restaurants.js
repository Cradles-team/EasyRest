import React from "react";
import {RestaurantsWrapper} from "./Restaurants.styled";
import StoreContext from "../../StoreContext";
import {Restaurant} from "./Restaurant/Restaurant";

export const Restaurants = () => {
    return (
        <StoreContext.Consumer>
            {({dataArr}) => (
                <RestaurantsWrapper>
                    {dataArr.map(({
                                      id, name, image, photo, coordinates, logo, schedule, address,
                                  }) => (
                            <Restaurant id={id}
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
            )}
        </StoreContext.Consumer>
    );
};

export default Restaurants;