import React, { useState } from 'react';
import { MultipleCustomHook } from "../examples/MultipleCustomHook";
import '../useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            {
                show && <MultipleCustomHook />
            }

            <button type="button" className="btn btn-primary mt-5" onClick={()=>{setShow(!show)}}>{show ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    )
}
