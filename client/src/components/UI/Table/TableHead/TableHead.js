import React from 'react';

const tableHead = props => {

    return (
        <React.Fragment>
            {props
                .data
                .map((data, i) => (
                    <th key={i}>
                        {data}
                    </th>
                ))}
        </React.Fragment>
    )
}

export default tableHead;