import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const tableItem = props => {

    /// Set Tools ///
    const tools = [];
    if (props.onDelete) {
        tools.push((
            <button key="btnDelete" onClick={props.onDelete}>
                <FontAwesomeIcon className="icon" icon="trash"/>
            </button>
        ));
    }

    if (props.onEdit) {
        tools.push((
            <button key="btnClick" onClick={props.onEdit}>
                <FontAwesomeIcon className="icon" icon="edit"/>
            </button>
        ));
    }

    if (props.onSend) {
        tools.push((
            <button key="btnSend" onClick={props.onSend}>
                <FontAwesomeIcon className="icon" icon="paper-plane"/>
            </button>
        ));
    }

    const organizeData = [];
    /// Organize Data
    if (props.order) {

        for (let name of props.order) {
            organizeData.push(props.data[name]
                ? props.data[name]
                : '?')
        }

    } else {
        for (let key in props.data) {
            organizeData.push(props.data[key])
        }
    }

    return (
        <React.Fragment>
            <tr>
                {organizeData.map((data, i) => (
                    <td key={data}>
                        {data}
                    </td>
                ))}

                {tools
                    ? <td key="tools" className="table-tools">{tools}</td>
                    : null}
            </tr>
            <tr className="spacer"></tr>
        </React.Fragment>
    )
}

export default tableItem;