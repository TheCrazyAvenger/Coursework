import {
  useAddStudentPartyScheduleMutation,
  useGetUserPartiesClassScheduleQuery,
  useGetUserPartyParticipantsIdsQuery,
  useRemoveStudentPartyScheduleMutation,
} from '@/api/schedule';
import {Typography} from '@/components/';
import {Screens} from '@/constants';
import {selectStudent} from '@/store/selectors';
import {selectPartiesScheduleIds} from '@/store/selectors/schedule';
import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {Button, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Props} from './props';
import {styles} from './styles';

export const HomePartyItemContainerItem = ({item, style}: Props) => {
  const navigation = useNavigation<any>();
  const selectedParties = useSelector(selectPartiesScheduleIds);
  const student = useSelector(selectStudent);

  const {refetch: refetchIds} = useGetUserPartyParticipantsIdsQuery({});
  const {refetch: refetchPatries} = useGetUserPartiesClassScheduleQuery({});
  const [removeStudentPartieSchedule] = useRemoveStudentPartyScheduleMutation(
    {},
  );
  const [addStudentPartieSchedule] = useAddStudentPartyScheduleMutation({});

  const [loading, setLoading] = useState(false);

  const isSelected = useMemo(() => {
    return selectedParties.findIndex(id => item.party_id === id) !== -1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedParties]);

  const buttonText = isSelected ? 'Отказаться' : 'Купить билеты';

  const updateData = async () => {
    await refetchIds();
    await refetchPatries();
  };

  const handleRemove = async () => {
    const data = {
      studentId: student!.student_id,
      partyId: item.party_id,
    };

    setLoading(true);
    await removeStudentPartieSchedule(data);
    await updateData();
    setLoading(false);
  };

  const handleAdd = async () => {
    const data = {
      studentId: student!.student_id,
      partyId: item.party_id,
    };

    setLoading(true);
    await addStudentPartieSchedule(data);
    await updateData();
    setLoading(false);
  };

  const onPress = () => {
    if (isSelected) {
      handleRemove();
    } else {
      handleAdd();
    }
  };

  const goToParty = () => {
    navigation.navigate(Screens.party, {id: item.party_id});
  };

  return (
    <Card style={[styles.container, style]} onPress={goToParty}>
      <Card.Content>
        <Typography variant="headlineMedium">Занятие</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.number_of_attendees} участников | {item.entrance_fee} р.
        </Typography>
        <Typography variant="labelMedium">
          {new Date(item.date).toDateString()}
        </Typography>
      </Card.Content>
      <Card.Actions>
        <Button loading={loading} disabled={loading} onPress={onPress}>
          {buttonText}
        </Button>
      </Card.Actions>
    </Card>
  );
};
