import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('mostrado...');
    return (
        <small>
            {value}
        </small>
    );
});
