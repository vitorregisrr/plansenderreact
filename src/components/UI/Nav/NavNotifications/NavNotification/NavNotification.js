import React from 'react';

const notification = props => {
    return (
        <li>
            <div class="notifications__icon">
                <i class="fa fa-check"></i>
            </div>
            <div>
                <p class="notifications__name">Seu plano"Informática I" acaba de ser avaliado.</p>
                <p class="notifications__desc">O Setor pedagógico recebeu seu plano e já o avaliou, clique para ver!</p>
                <p class="notifications__date">14/08/2001</p>
            </div>
        </li>
    )
}

export default notification;