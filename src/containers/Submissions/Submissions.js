import React, {useState} from 'react';

import SubmissionsList from '../../components/SubmissionsList/SubmissionsList';
const Submissions = props => {

    const [pendentes,
        setPendentes] = useState([
        {
            turma: '5o semestre técnico em informática',
            materia: 'Banco de dados',
            id: 1
        }
    ]);
    const [analises,
        setAnalises] = useState([
        {
            turma: '5o semestre técnico em informática',
            materia: 'Banco de dados',
            id: 1
        }
    ]);
    const [aprovados,
        setAprovados] = useState([
        {
            turma: '5o semestre técnico em informática',
            materia: 'Banco de dados',
            id: 1
        }
    ]);

    return (
        <section className="Submissions">
            <SubmissionsList
                status="pendentes"
                data={pendentes}
                title="Pendentes"
                subtitle="Precisam ser submetidos"/>

            <SubmissionsList
                status="analises"
                data={analises}
                title="Em Análise"
                subtitle="Em análise pelo setor pedagógico"/>

            <SubmissionsList
                status="aprovados"
                data={aprovados}
                title="Aprovados"
                subtitle="Aprovados pelo setor pedagógico"/>
        </section>
    )
}

export default Submissions;