

import CalendarList from '../../components/Calendar/Calendar';
import { Container, ContainerScrool } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';



export const Medico_Consulta = () => {

    return (
<ContainerScrool>
        <Container>
        <Header/>
        <CalendarList/>
        </Container>
        </ContainerScrool>

    );

}