import { Button, ButtonTitle } from '../../components/Button/Style';
import { CalendarSchedule } from '../../components/CalendarSchedule/CalendarSchedule';
import { Container } from '../../components/Container/Style';
import { LinkCancel } from '../../components/Links/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';

export const Paciente_Selecionar_Data = () => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>
            
            <CalendarSchedule/>

            <Button>
                <ButtonTitle>
                    Cadastrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel>Cancelar</LinkCancel>
            </ContentAccount>
        </Container>
    );
}
