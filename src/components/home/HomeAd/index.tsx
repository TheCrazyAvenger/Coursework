import {Typography} from '@/components';
import React from 'react';
import {Linking} from 'react-native';
import {Card} from 'react-native-paper';
import {styles} from './styles';

export const HomeAd = () => {
  const openAd = () => {
    Linking.openURL(
      'https://tamada66.ru/stati/sczenarij-tanczevalnoj-vecherinki',
    );
  };

  return (
    <Card style={styles.container} onPress={openAd}>
      <Card.Cover
        source={{uri: 'https://tamada66.ru/userfiles/articles/art491.jpg'}}
      />
      <Typography style={styles.text} variant="titleLarge" color={'#fff'}>
        Реклама
      </Typography>
    </Card>
  );
};
