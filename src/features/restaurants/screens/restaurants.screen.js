import React, { useState, useContext, useEffect } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.component';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utils/safe-area';
import { FlatList, TouchableOpacity, View } from 'react-native';
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

export const ResturantsScreens = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          {restaurants.length > 0 && restaurants !== undefined && (
            <ResturantList
              data={restaurants}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('RestaurantDetail', {
                        restaurant: item,
                      })
                    }
                  >
                    <RestaurantInfo resturant={item} />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.name}
            />
          )}
        </>
      )}
    </SafeArea>
  );
};
