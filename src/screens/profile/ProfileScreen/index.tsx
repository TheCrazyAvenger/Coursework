import {Header, InfoItem, ScreenContainer, Typography} from '@/components';
import {useAppDispatch} from '@/hooks';
import {selectStudent} from '@/store/selectors';
import {setStudent, setToken} from '@/store/slices';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const ProfileScreen = () => {
  const {colors} = useTheme();
  const student = useSelector(selectStudent);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    await dispatch(setToken(null));
    await dispatch(setStudent(null));
    setLoading(false);
  };

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{backgroundColor: colors.primary}}>
        <Header title={'Профиль'} pv={24} />
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          <Typography variant="headlineMedium" mb={24}>
            Информация о студенте
          </Typography>
          <InfoItem title="Имя" description={student?.first_name} />
          <InfoItem title="Фамилия" description={student?.last_name} />
          <InfoItem
            title="Номер телефона"
            description={student?.phone_number}
          />
          <InfoItem title="Адрес" description={student?.address} />
          <InfoItem
            title="Адрес"
            description={new Date(student!.date_of_birth).toDateString()}
          />
          <Typography variant="headlineMedium" mt={8} mb={16}>
            Управление
          </Typography>
          <Button
            loading={loading}
            disabled={loading}
            style={styles.button}
            onPress={logout}
            mode="contained">
            Выйти из аккаунта
          </Button>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
