import {AppDarkTheme, AppDefaultTheme} from '@/constants';
import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {PaperProvider, useTheme} from 'react-native-paper';
import {BottomTabs} from './ApplicationStackNavigator';

export const RootNavigator = () => {
  const {dark} = useTheme();
  const theme = useMemo(() => (dark ? AppDarkTheme : AppDefaultTheme), [dark]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <BottomTabs />
      </NavigationContainer>
    </PaperProvider>
  );
};
