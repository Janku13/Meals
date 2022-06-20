import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Text } from '../../../components/typography/text.component';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  Info,
  Section,
  SectionEnd,
  ResturantCard,
  CardCover,
  Address,
  Rating,
  Icon,
} from './resturant-info-styles';

export const RestaurantInfo = ({ resturant }) => {
  // const ratingArray = Array.from(new Array(Math.floor(resturant.rating)));
  return (
    <ResturantCard elevation={5}>
      <CardCover key={resturant.name} source={{ uri: resturant.photos[0] }} />
      <Info>
        <Text variant="label">{resturant.name}</Text>
        <Section>
          <Rating>
            {/* {ratingArray.map((item, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))} */}
          </Rating>
          <SectionEnd>
            {resturant.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {resturant.isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon
                style={{ width: 15, height: 15 }}
                source={{ uri: resturant.icon }}
              />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{resturant.address}</Address>
      </Info>
    </ResturantCard>
  );
};
