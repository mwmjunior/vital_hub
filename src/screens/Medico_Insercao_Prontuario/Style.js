import { Button, ButtonTitle } from '../../components/Button/Style';
import { Container } from '../../components/Container/Style';
import { Input } from '../../components/Input/Style';
import { InputLabel } from '../../components/Label/Style';
import { LinkCancel } from '../../components/Links/Style';

import { Logo } from '../../components/Logo/Style';
import { SubTitle, SubTitleContainer } from '../../components/Subtitle/Style';
import { Title } from '../../components/Title/Style';
import { ContentAccount } from '../Login/Style';




export const Medico_Insercao_Prontuario = () => {

    return (

        <Container>

            <Logo source={require("../../assets/Men.png")} />

            
            <Input
                textLabel="Informe o CEP:"
                placeholder="Descrição"
            />
            <Input
                placeholder="Diagnóstico"
            />
            <Input
                placeholder="Prescrição medica"
            />

            <Button>
                <ButtonTitle>
                    Salvar
                </ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkCancel> Cancelar</LinkCancel>
            </ContentAccount>

        </Container>


    );

}