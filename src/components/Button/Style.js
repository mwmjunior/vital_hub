
import styled from "styled-components/native";



export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;

  background-color: #496BBA;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: #496BBA ;
  padding: 12px 8px 12px 8px;
  margin-top: 15px; 
`;

export const ButtonTitle = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-family: MontserratAlternates_700Bold;
  text-transform: uppercase;
`;


export const ButtonGoogle = styled(Button)`
background-color: #FAFAFA;
flex-direction: row;
gap:27px;
`;

export const ButtonTitleGoogle = styled(ButtonTitle)`
  color: #496BBA;
  
`;

