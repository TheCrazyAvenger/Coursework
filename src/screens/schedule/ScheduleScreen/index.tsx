import {
  Header,
  RenderScheduleData,
  ScheduleMenu,
  ScreenContainer,
} from '@/components';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {styles} from './styles';

export const ScheduleScreen = () => {
  const {colors} = useTheme();

  const [selectedMenu, setSelectedMenu] = useState<string>('individual');

  return (
    <ScreenContainer>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        <Header title="Заказы" pv={24} />
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          <ScheduleMenu value={selectedMenu} setValue={setSelectedMenu} />
          <RenderScheduleData variant={selectedMenu} />
        </View>
      </View>
    </ScreenContainer>
  );
};
