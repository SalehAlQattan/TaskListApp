// react
import React from 'react';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// components
import TaskList from '../task/TaskList';
import Home from '../home/Home';
import TaskDetail from '../task/TaskDetail';
import CreateTask from '../task/CreateTask';
import UpdateTask from '../task/UpdateTask';

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#292929',
        },
        headerTintColor: '#bb86fd',
        headerTitleStyle: {
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Task List" component={TaskList} />
      <Stack.Screen name="Task Detail" component={TaskDetail} />
      <Stack.Screen name="Create Task" component={CreateTask} />
      <Stack.Screen name="Update Task" component={UpdateTask} />
    </Stack.Navigator>
  );
};
