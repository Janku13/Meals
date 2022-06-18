import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

import { Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantInfo } from '../components/resturant-info.component';

const IsAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchBoxContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ResturantsScreens = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchBoxContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBoxContainer>
      <ListView>
        <RestaurantInfo />
      </ListView>
    </SafeArea>
  );
};
