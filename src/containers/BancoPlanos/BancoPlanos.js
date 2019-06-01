import React from 'react';

import ContentHeader from '../../components/ContentHeader/ContentHeader';
import {Table} from '../../components/UI'

const BancoPlanos = props => {
    return (
        <div id="BancoPlanos" clas="BancoPlanos">
            <ContentHeader
                title="Vítor, esse é o seu banco de planos."
                subtitle="Aqui você pode criar ou editar planos que para submeter aos
                semestres."
                button={{
                label: 'Novo plano',
                link: '/novoplano'
            }}>
                <select class="form-white">
                    <option>Curso</option>
                </select>

                <select class="form-white">
                    <option>Matéria</option>
                </select>
            </ContentHeader>

            <Table
                data={[
                {
                    name: 'Vitor',
                    apelido: "Vitinho",
                    id: 1
                }, {
                    apelido: "Vitinho",
                    name: 'Vitor',
                    id: 2
                }
            ]}
                config={{
                headers: [
                    {
                        label: "Nome",
                        name: "name"
                    }, {
                        label: "Apelido",
                        name: "apelido"
                    }
                ],
                tools: {
                    onEdit: () => console.log('a')
                }
            }}/>
        </div>
    )
}

export default BancoPlanos;