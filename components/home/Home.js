// react
import React from 'react';

// styles
import { HomeWrapper, HomeTitle, HomeButton, HomeButtonText } from './styles';

const Home = ({ navigation }) => {
  return (
    <HomeWrapper>
      <HomeTitle>Welcom To Your Task List App</HomeTitle>
      <HomeButton onPress={() => navigation.navigate('Task List')}>
        <HomeButtonText>Task List</HomeButtonText>
      </HomeButton>
      <HomeButton onPress={() => navigation.navigate('Create Task')}>
        <HomeButtonText>Create Task</HomeButtonText>
      </HomeButton>
    </HomeWrapper>
  );
};

export default Home;
