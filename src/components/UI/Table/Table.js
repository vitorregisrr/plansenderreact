import React from 'react';
import propTypes from 'prop-types';

import TableItem from './TableItem/TableItem';
import TableHead from './TableHead/TableHead';

export const Table = props => {

    /// Get header labels ///
    const headerLabels = props
        .config
        .headers
        .map(header => header.label);

    /// Get Header names ///
    const headerNames = props
        .config
        .headers
        .map(header => header.name);

    /// Build Bodys ///
    const tableItems = props
        .data
        .map(data => (<TableItem
            key={data.id}
            data={data}
            order={headerNames}
            {...props.config.tools}/>));

    return (
        <table className="table table-white">
            <thead>
                <tr>
                    <TableHead data={headerLabels}/>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    )
}

Table.propTypes = {

    // Should contain an array cald data with objects that contains an UNIQUE ID.
    data: propTypes.arrayOf(propTypes.shape({
        id: propTypes.oneOfType([propTypes.number, propTypes.string])
    })),

    // Should cointain an object called config
    config: propTypes.shape({

        // Should contain an object Header, whose is an Array with the name(key) and label(will be showed)
        headers: propTypes.arrayOf(propTypes.shape({ 
            name: propTypes.string,
            label: propTypes.string
        }))
    })
};

export default Table;