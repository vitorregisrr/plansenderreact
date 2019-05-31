import React from 'react';

import {Table} from '../../components/UI'

const BancoPlanos = props => {
    return (<Table
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
    }}/>)
}

export default BancoPlanos;