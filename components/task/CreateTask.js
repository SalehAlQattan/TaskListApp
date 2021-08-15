// react
import React, { useState } from 'react';

// react-native
import { View } from 'react-native';

// stores
import taskStore from '../../stores/taskStore';

// styles
import {
  SubmitButton,
  SubmitButtonText,
  CreateContainer,
  Title,
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
      <Title>Create Task</Title>
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
      <SubmitButton onPress={handlePress}>
        <SubmitButtonText>Add Task</SubmitButtonText>
      </SubmitButton>
    </CreateContainer>
  );
};

export default CreateTask;
