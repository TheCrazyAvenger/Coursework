import {Header, RenderInstructors, ScreenContainer} from '@/components';
import {selectInstructors} from '@/store/selectors';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const InstructorsScreen = () => {
  const {colors} = useTheme();
  const instructors = useSelector(selectInstructors);

  return (
    <ScreenContainer>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        <Header title={'Инструкторы'} pv={24} />
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          <RenderInstructors data={instructors} />
        </View>
      </View>
    </ScreenContainer>
  );
};
