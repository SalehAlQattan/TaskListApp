import styled from 'styled-components/native';

export const HomeWrapper = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HomeTitle = styled.Text`
  text-align: center;
  width: 80%;
  font-size: 45px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

export const HomeButton = styled.TouchableOpacity`
  width: 170px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color};
`;

export const HomeButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.backgroundColor};
`;
