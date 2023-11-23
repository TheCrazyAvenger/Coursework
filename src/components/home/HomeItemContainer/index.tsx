import {Typography} from '@/components';
import {IGroupClasses, IIndividualClasses} from '@/store/types';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {HomeItemContainerItem} from './HomeItemContainerItem';
import {Props} from './props';
import {styles} from './styles';

export const HomeItemContainer = ({title, data}: Props) => {
  const {colors} = useTheme();

  const keyExtractor = (item: IIndividualClasses | IGroupClasses) =>
    item.class_id.toString();
  const renderItem = ({item}: {item: IIndividualClasses | IGroupClasses}) => (
    <HomeItemContainerItem item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="titleLarge">{title}</Typography>
        <Typography variant="titleMedium" color={colors.primary}>
          Все
        </Typography>
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
