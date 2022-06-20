import React, { useState, useContext, useEffect } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utils/safe-area';
import { FlatList, View } from 'react-native';
import { RestaurantInfo } from '../components/resturant-info.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ResturantsScreens = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  console.log('logo', restaurants[0]);
  useEffect(() => {
    if (restaurants) {
      console.log('logo', restaurants[0].photos);
    }
  }, [restaurants]);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          {/* {restaurants.length > 0 && (
            <ResturantList
              data={restaurants}
              renderItem={(item) => <RestaurantInfo resturant={item} />}
              keyExtractor={(item) => item.name}
            />
          )} */}
        </>
      )}
    </SafeArea>
  );
};
