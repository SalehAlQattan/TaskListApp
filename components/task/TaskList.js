// mobx
import { observer } from 'mobx-react';

// react
import React from 'react';

// react-native
import { Text, View } from 'react-native';

// native-base
import { Spinner } from 'native-base';

// stores
import taskStore from '../../stores/taskStore';

// components
import TaskItem from './TaskItem';

// styles
import { ListContainer } from './styles';

const TaskList = ({ navigation }) => {
  if (taskStore.loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner />
      </View>
    );
  }

  const taskList = taskStore.tasks.map((task) => (
    <TaskItem navigation={navigation} task={task} key={task.id} />
  ));

  return <ListContainer>{taskList}</ListContainer>;
};

export default observer(TaskList);
