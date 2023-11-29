import {useGetIndividualClassesQuery} from '@/api';
import {
  useAddStudentClassScheduleMutation,
  useGetUserClassScheduleIdsQuery,
  useRemoveStudentClassScheduleMutation,
} from '@/api/schedule';
import {Typography} from '@/components';
import {selectStudent} from '@/store/selectors';
import {selectClassesScheduleIds} from '@/store/selectors/schedule';
import React, {useMemo, useState} from 'react';
import {Button, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Props} from './props';
import {styles} from './styles';

export const HomeItemContainerItem = ({item, style}: Props) => {
  const selectedClasses = useSelector(selectClassesScheduleIds);
  const student = useSelector(selectStudent);

  const {refetch: refetchIds} = useGetUserClassScheduleIdsQuery({});
  const {refetch: refetchClasses} = useGetIndividualClassesQuery({});
  const [removeStudentClassSchedule] = useRemoveStudentClassScheduleMutation(
    {},
  );
  const [addStudentClassSchedule] = useAddStudentClassScheduleMutation({});

  const [loading, setLoading] = useState(false);

  const isSelected = useMemo(() => {
    return selectedClasses.findIndex(id => item.class_id === id) !== -1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedClasses]);

  const buttonText = isSelected ? 'Отписаться' : 'Записаться';

  const updateData = async () => {
    await refetchIds();
    await refetchClasses();
  };

  const handleRemove = async () => {
    const data = {
      studentId: student!.student_id,
      classId: item.class_id,
    };

    setLoading(true);
    await removeStudentClassSchedule(data);
    await updateData();
    setLoading(false);
  };

  const handleAdd = async () => {
    const data = {
      studentId: student!.student_id,
      classId: item.class_id,
    };

    setLoading(true);
    await addStudentClassSchedule(data);
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

  return (
    <Card style={[styles.container, style]}>
      <Card.Content>
        <Typography variant="headlineMedium">{item.class_name}</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.type_id} | {item.day_of_week}
        </Typography>
        <Typography variant="labelMedium">
          {item.start_time} - {item.end_time}
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
