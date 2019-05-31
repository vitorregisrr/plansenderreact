import React from 'react';

const ContentHeader = props => {
    return (
        <header className="ContentHeader">
            <div className="ContentHeader__desc">
                <h1 className="ContentHeader__desc__title">{props.title}</h1>
                <h2 className="ContentHeader__desc__subtitle">{props.subtitle}</h2>
            </div>
            <div className="ContentHeader__buttons">
                <div className="ContentHeader__buttons__left">
                    <div className="ContentHeader__filters">
                        <p>Filtrar por:</p>

                        <select className="form-white">
                            <option>Semestre</option>
                        </select>

                        <select className="form-white">
                            <option>Curso</option>
                        </select>

                        <p>Consultar os planos de:</p>
                        <select className="form-white">
                            <option>2018/2</option>
                        </select>
                    </div>
                </div>
                <div className="ContentHeader__buttons__right">
                    <a role="button" href="bancoplanos.html" className="button-blue">Banco de planos</a>
                </div>
            </div>
        </header>
    )
}

export default ContentHeader;