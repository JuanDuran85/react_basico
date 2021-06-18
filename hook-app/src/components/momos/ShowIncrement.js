import React from 'react';

export const ShowIncrement = React.memo(({incrementar}) => {
    console.log('generado nuevamente...');
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={()=>incrementar(3)}>
            Incrementar +1
        </button>
    );
});
