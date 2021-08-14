// mobx
import { observer } from 'mobx-react';

// react
import React from 'react';

// react-native
import { Text } from 'react-native';

// native-base
import { ListItem } from './styles';

// styles
import { ListItemText } from './styles';

// component
const TaskItem = ({ task, navigation }) => {
  return (
    <ListItem>
      <ListItemText
        onPress={() =>
          navigation.navigate('Task Detail', {
            task: task,
            navigation: navigation,
          })
        }
      >
        ✅ {task.title}
      </ListItemText>
    </ListItem>
  );
};

export default observer(TaskItem);
