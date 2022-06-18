import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};s
`;

const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantInfo = () => {
  const resturant = {
    name: 'Some Restaurant',
    icon: '',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: '',
  };

  return (
    <ResturantCard elevation={5}>
      <CardCover key={resturant.name} source={{ uri: resturant.photos[0] }} />
      <Title>{resturant.name}</Title>
    </ResturantCard>
  );
};
