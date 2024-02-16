import styled from "styled-components";


export const Input =styled.TextInput.attrs({
    placeholderTextColor: '#34899F'
})`

width:90% ;
height:53px;
padding:16px;
margin-top:15px;

border: 2px solid #49B3BA;
border-radius: 5px;
color: #34899F;
font-size:16px ;
font-family: 'MontserratAlternates_600SemiBold';

`
export const InputLarger = styled(Input)`
width: 90%;
height: 121px;
padding-bottom: 80px;
text-align: left; /* Alinha o placeholder à esquerda */
top: 10px; /* Ajusta a distância do placeholder do topo */


  

`