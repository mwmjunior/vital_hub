import { Button, ButtonTitle } from '../../components/Button/Style';
import { ClinicCardList } from '../../components/CardList/CardList';
import { Container, ContainerScrool } from '../../components/Container/Style';
import { Input } from '../../components/Input/Style';
import { LinkCancel } from '../../components/Links/Style';

import { Logo } from '../../components/Logo/Style';
import { SubTitle, SubTitleContainer } from '../../components/Subtitle/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';




export const Paciente_Selecionar_Clinica = () => {

    return (
<ContainerScrool>
        <Container>

        <Title>Selecionar Clínica</Title>
            
        <ClinicCardList 
                cardsData={clinicCards}
            />

            <Button>
                <ButtonTitle>
                    Cadastrar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Cancelar</LinkCancel>
            </ContentAccount>

        </Container>

        </ContainerScrool>
    );

}