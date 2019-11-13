import React, { useState } from 'react';
import './style.css';

const FunctionalToggle = () => {
    const [visible, setVisibile] = useState(true);

    return (
        <>
            <h3>Functional Component</h3>
            <button onClick={() => setVisibile(!visible)}>Toggle</button>
            <p>Visibility: <span role="img" aria-label="visibility">{visible ? '👌' : '🙅🏾'}</span></p>
            {visible ? <div className="image-background"></div> : null}
        </>
    )
}

export default FunctionalToggle;