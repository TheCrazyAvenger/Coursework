import {Typography} from '@/components';
import {IParties} from '@/store/types';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {HomePartyItemContainerItem} from './HomePartyItemContainerItem';
import {Props} from './props';
import {styles} from './styles';

export const HomePartyItemContainer = ({title, data}: Props) => {
  const {colors} = useTheme();

  const keyExtractor = (item: IParties) => item.party_id.toString();
  const renderItem = ({item}: {item: IParties}) => (
    <HomePartyItemContainerItem item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="titleLarge">{title}</Typography>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
