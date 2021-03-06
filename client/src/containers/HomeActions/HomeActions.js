import React from 'react';

import HomeAction from '../../components/HomeAction/HomeAction';

const HomeActions = props => {
    const actions = [
        {
            link: '/submissoes',
            icon: 'paper-plane',
            title: 'Submeter plano!',
            subtitle: "Cheque o status ou realize submissões de planos de estudo."

        }, {
            link: '/meusplanos',
            icon: 'list',
            title: 'Meus planos!',
            subtitle: "Crie ou gerencie seus planos de estudo, para depois submete-los."

        }, {
            link: '/avaliar',
            icon: 'check-square',
            title: 'Avaliar planos!',
            subtitle: "Avalie os planos que foram submetidos pelos professores da sua instituição."
        }, {
            link: '/instituicao',
            icon: 'atlas',
            title: 'Gerenciar instituição!',
            subtitle: "Gerencie os cursos, grades curriculares e professores da sua instituição."

        }, {
            link: '/minhaconta',
            icon: 'cogs',
            title: 'Configurar conta!',
            subtitle: "Configure os dados da sua conta, logins e sinalize suas matérias."

        }
    ];
    return (
        <section className="HomeActions">
            {actions.map((action, i) => (<HomeAction
                key={i}
                link={action.link}
                icon={action.icon}
                title={action.title}
                subtitle={action.subtitle}/>))}
        </section>
    )
}

export default HomeActions;