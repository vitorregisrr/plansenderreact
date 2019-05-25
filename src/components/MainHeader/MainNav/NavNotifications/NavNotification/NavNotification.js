import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const navNotification = props => {
    return (
        <li className="Notification">
            <div className="Notification__icon">
                <FontAwesomeIcon className="icon" icon="check" />
            </div>
            <div>
                <p className="Notification__name">Seu plano "Informática I" acaba de ser avaliado.</p>
                <p className="Notification__desc">O Setor pedagógico recebeu seu plano e já o avaliou, clique para ver!</p>
                <p className="Notification__date">14/08/2001</p>
            </div>
        </li>
    )
}

export default navNotification;