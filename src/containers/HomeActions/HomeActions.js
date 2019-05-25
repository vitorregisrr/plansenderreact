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
            link: '/minhaconta',
            icon: 'cogs',
            title: 'Configurar conta!',
            subtitle: "Configure os dados da sua conta, logins e sinalize suas matérias."

        }, {
            link: '/instituicao',
            icon: 'atlas',
            title: 'Gerenciar instituição!',
            subtitle: "Gerencie os cursos, grades curriculares e professores da sua instituição."

        }, {
            link: '/avaliar',
            icon: 'check-square',
            title: 'Avaliar planos!',
            subtitle: "Avalie os planos que foram submetidos pelos professores da sua instituição."
        }
    ];
    return (
        <div className="container">
            <section className="HomeActions">
                {actions.map(action => (
                <HomeAction
                    link={action.path}
                    icon={action.icon}
                    title={action.title}
                    subtitle={action.subtitle}/>))}
            </section>
        </div>
    )
}

export default HomeActions;