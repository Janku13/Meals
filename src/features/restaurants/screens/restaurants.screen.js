import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utils/safe-area';
import { FlatList, View } from 'react-native';
import { RestaurantInfo } from '../components/resturant-info.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
const SearchBoxContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const ResturantsScreens = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchBoxContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBoxContainer>
      <ResturantList
        data={restaurants}
        renderItem={(item) => <RestaurantInfo resturant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
