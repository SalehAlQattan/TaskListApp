// react
import React, { useState } from 'react';

// react-native
import { View } from 'react-native';

// stores
import taskStore from '../../stores/taskStore';

// styles
import {
  CreatButton,
  CreateButtonText,
  CreateContainer,
  CreateTitle,
  TextInputStyled,
} from './styles';

const CreateTask = ({ navigation }) => {
  // task state
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  // handle create
  const handlePress = () => {
    navigation.replace('Task List');
    taskStore.createTask(task);
  };

  return (
    <CreateContainer>
      <CreateTitle>Create Task</CreateTitle>
      <View>
        <TextInputStyled
          autoCapitalize="none"
          onChangeText={(title) => setTask({ ...task, title })}
          placeholder="Enter Title ..."
          placeholderTextColor="#fff"
        />
        <TextInputStyled
          autoCapitalize="none"
          onChangeText={(description) => setTask({ ...task, description })}
          placeholder="Enter Description ..."
          multiline={true}
          placeholderTextColor="#fff"
        />
      </View>
      <CreatButton onPress={handlePress}>
        <CreateButtonText>Add Task</CreateButtonText>
      </CreatButton>
    </CreateContainer>
  );
};

export default CreateTask;
