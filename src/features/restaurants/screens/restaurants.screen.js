import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utils/safe-area';
import { FlatList, View } from 'react-native';
import { RestaurantInfo } from '../components/resturant-info.component';

const SearchBoxContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

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
      <ResturantList
        data={[
          {
            name: 'Some Restaurant1',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
          {
            name: 'Some Restaurant2',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
          {
            name: 'Some Restaurant3',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
          {
            name: 'Some Restaurant4',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
          {
            name: 'Some Restaurant5',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
          {
            name: 'Some Restaurant6',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: true,
          },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
