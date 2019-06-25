import React from 'react';

import ContentHeader from '../../components/ContentHeader/ContentHeader';
import {Collapse} from '../../components/UI/';

const newPlan = props => {
    return (
        <div id="NewPlan" className="NewPlan">
            <ContentHeader
                title="Criando plano!"
                subtitle="Complete os dados abaixo para criar um plano."/>

            <Collapse title="Informações de identificação" optional>
                <div class="input-group">
                    <label class="input__title">
                        <i class="fa fa-info-circle"></i>
                        Nome do plano</label>
                    <input
                        class="form-white bordered w-100"
                        placeholder="Biologia Molecular II"
                        id="plano_nome"></input>
                </div>
                <div class="input-group">
                    <label class="input__title">
                        <i class="fa fa-info-circle"></i>
                        Descrição do plano</label>
                    <textarea
                        class="form-white bordered w-100"
                        placeholder="Plano de Ensino criado para a turma tal, com tal propósito."
                        id="plano_desc"></textarea>
                </div>
            </Collapse>

        </div>

    )
}

export default newPlan;