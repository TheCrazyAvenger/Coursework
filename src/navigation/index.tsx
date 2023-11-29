import {AppDarkTheme, AppDefaultTheme} from '@/constants';
import {selectToken} from '@/store/selectors';
import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {PaperProvider, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {BottomTabs} from './ApplicationStackNavigator';
import {AuthenticationStackNavigator} from './AuthenticationStackNavigator';

export const RootNavigator = () => {
  const {dark} = useTheme();
  const theme = useMemo(() => (dark ? AppDarkTheme : AppDefaultTheme), [dark]);
  const token = useSelector(selectToken);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {token ? <BottomTabs /> : <AuthenticationStackNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};
