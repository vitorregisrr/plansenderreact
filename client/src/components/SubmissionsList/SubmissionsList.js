import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const submissionsList = props => {
    return (
        <div className={`SubmissionsList ${props.status}`}>
            <header className="SubmissionsList__header">
                <p className="SubmissionsList__header__title">{props.title}</p>
                <p className="SubmissionsList__header__subtitle">{props.subtitle}</p>
            </header>
            <ul className="SubmissionsList__list">
               { props.data.map( plano => (
                <li className="SubmissionsList__list__item" key={plano.id}>
                    <div className="SubmissionsList__list__item__desc">
                        <p className="SubmissionsList__list__item__desc__materia">{plano.materia}</p>
                        <p className="SubmissionsList__list__item__desc__turma">{plano.turma}</p>
                    </div>
                    <button className="SubmissionsList__list__item__btn">
                        <FontAwesomeIcon className="icon" icon={props.status === 'pendentes' ? 'paper-plane' : 'info'} />
                    </button>
                </li>)
            )}
            </ul>
        </div>
    )
}

export default submissionsList;