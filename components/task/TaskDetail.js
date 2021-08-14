// react
import React from 'react';

// react-native
import { View, Alert } from 'react-native';

// store
import taskStore from '../../stores/taskStore';

// mobx
import { observer } from 'mobx-react';

// styles
import {
  ButtonsContainer,
  DeleteButton,
  DetailContainer,
  DetailText,
  EditButton,
} from './styles';

// main component
const TaskDetail = ({ route, navigation }) => {
  // params
  const { task } = route.params;

  // loading if data not fetched yet
  if (taskStore.loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner />
      </View>
    );
  }

  // find signle task
  const foundTask = taskStore.getTaskById(task.id);

  // deleting task on press
  const handleDelete = () => {
    taskStore.deleteTask(foundTask.id);
    navigation.goBack();
  };

  // updating task on press
  const handleUpdate = () => {
    navigation.navigate('Update Task', { foundTask: foundTask });
  };

  const handleAlert = () => {
    Alert.alert('Delete Task ?', '', [
      { text: 'DELETE', onPress: handleDelete, style: 'destructive' },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <DetailContainer>
      <View>
        <DetailText>{task.title}</DetailText>
        <DetailText>{task.description}</DetailText>
      </View>
      <ButtonsContainer>
        <DeleteButton name="delete" size={24} onPress={handleAlert} />
        <EditButton name="edit" size={24} onPress={handleUpdate} />
      </ButtonsContainer>
    </DetailContainer>
  );
};

export default observer(TaskDetail);
