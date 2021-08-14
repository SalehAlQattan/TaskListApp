// react
import React, { useState } from 'react';

// react-native
import { View } from 'react-native';

// store
import taskStore from '../../stores/taskStore';

// mobx
import { observer } from 'mobx-react';

// styles
import {
  CreatButton,
  CreateButtonText,
  CreateContainer,
  CreateTitle,
  TextInputStyled,
} from './styles';

const UpdateTask = ({ route, navigation }) => {
  const { foundTask } = route.params;

  // task state
  const [task, setTask] = useState({
    id: foundTask.id,
    title: foundTask.title,
    description: foundTask.description,
  });

  const handleUpdate = () => {
    taskStore.updateTask(task);
    navigation.navigate('Task List');
  };

  return (
    <CreateContainer>
      <CreateTitle>Update Task</CreateTitle>
      <View>
        <TextInputStyled
          autoCapitalize="none"
          onChangeText={(title) => setTask({ ...task, title })}
          placeholder="Enter Title ..."
          placeholderTextColor="#fff"
          value={task.title}
        />
        <TextInputStyled
          autoCapitalize="none"
          onChangeText={(description) => setTask({ ...task, description })}
          placeholder="Enter Description ..."
          multiline={true}
          placeholderTextColor="#fff"
          value={task.description}
        />
      </View>
      <CreatButton onPress={handleUpdate}>
        <CreateButtonText>Update</CreateButtonText>
      </CreatButton>
    </CreateContainer>
  );
};

export default observer(UpdateTask);
