

import { useState } from 'react';
import CalendarList from '../../components/Calendar/Calendar';
import { Container, ContainerScrool } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { FilterAppointment } from './Style';
import { AbsListAppointment } from '../../components/AbsListAppointment/AbsListAppointment';

const Consultas = [

    { id: 1, nome: "Marcio", situacao: "pendente" }
]



export const Medico_Consulta = () => {
    const [statusLista, setStatusLista] = useState("pendente")

    return (
        <ContainerScrool>
            <Container>
                <Header />
                <CalendarList />
                
                <FilterAppointment>
                    <AbsListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "pendente"}
                        onPress={() => setStatusLista ("pendente")}
                    />
                    <AbsListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "realizado"}
                        onPress={() => setStatusLista ("realizado")}
                    />
                    <AbsListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "cancelado"}
                        onPress={() => setStatusLista ("cancelado")}
                    />
                   

                </FilterAppointment>
            </Container>

        </ContainerScrool>


    );

}