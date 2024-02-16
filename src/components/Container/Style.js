
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";



export const Container = styled.View`
flex: 1;
align-Items: center;
background-Color: #FAFAFA;

`

export const ContainerScrool = styled.ScrollView`
flex: 1;
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
    width: 100%;
    height: 144px;
    border-radius: 15px;
`
