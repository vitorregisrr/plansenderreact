import React, {useState, useRef, useEffect} from 'react';

import MediaQuery from 'react-responsive';
import Slider from "react-slick";

import SubmissionsList from '../../components/SubmissionsList/SubmissionsList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';

const Submissions = props => {

    const [pendentes,
        setPendentes] = useState([]);
    const [analises,
        setAnalises] = useState([]);
    const [aprovados,
        setAprovados] = useState([]);

    const sliderRef = useRef();

    // useEffect(() => {     sliderRef         .current         .slickGoTo(2); },
    // [])

    const lists = [ < SubmissionsList status = "pendentes" data = {
            pendentes
        }
        title = "Pendentes" subtitle = "Turmas ainda não submetidas" />, < SubmissionsList status = "analises" data = {
            analises
        }
        title = "Em Análise" subtitle = "Em análise pelo setor pedagógico" />, < SubmissionsList status = "aprovados" data = {
            aprovados
        }
        title = "Aprovados" subtitle = "Aprovados pelo setor pedagógico" />
    ];

    return (
        <section className="Submissions">
            <ContentHeader
                title="Vítor, esses são os status das suas submissões."
                subtitle="Tome cuidado, o prazo máximo para o envio dos planos deste semestre é 03/11/2018."/>

            <MediaQuery query="(max-width: 768px)">
                <Slider
                    ref={sliderRef}
                    settings={{
                    nav: true,
                    speed: 500,
                    margin: 30
                }}>
                    {lists.map((list, i) => (
                        <div key={i}>
                            {list}
                        </div>
                    ))}
                </Slider>
            </MediaQuery>

            <MediaQuery query="(min-width: 768px)">
                {lists.map(list => list)}
            </MediaQuery>

        </section>
    )
}

export default Submissions;