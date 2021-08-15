// styled-components
import styled from 'styled-components/native';

// styles
import { List } from 'native-base';

// expo-icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// ******************** Begin Create Styling ******************************* //
export const Title = styled.Text`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

export const CreateContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const TextInputStyled = styled.TextInput`
  font-size: 18px;
  border-bottom-width: 2px;
  border-color: #fff;
  padding: 7px;
  margin: 20px;
  color: ${({ theme }) => theme.color};
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 0 auto;
  width: 170px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color};
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;
// ********************** End Create Styling ********************************* //

// ********************** Start List Styling ********************************* //

export const ListContainer = styled(List)`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ListTitle = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  color: #fff;
`;

// ********************** End List Styling ********************************* //

// ****************** Start List Item Styling ****************************** //
export const ListItem = styled(List.Item)`
  margin-bottom: 10px;
`;

export const ListItemText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.color};
`;
// ******************* End List Item Styling ****************************** //

// ******************* Start Detail Styling ****************************** //

export const DetailContainer = styled.View`
  padding-left: 10px;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const DetailText = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.color};
`;

export const DeleteButton = styled(AntDesign)`
  color: red;
`;

export const EditButton = styled(Feather)`
  color: orange;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
`;
// ******************* End Detail Styling ****************************** //
