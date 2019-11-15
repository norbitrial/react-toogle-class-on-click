import React, { useState } from 'react';
import styled from 'styled-components';

const Image = styled.div`
    background-image: url('/assets/fruit.jpg');
    width: 280px;
    height: 187px;
    margin: 0 auto;
    border-radius: 5%;
    box-shadow: 5px 5px 5px 0px #dbdbdb;
`;

const StyledToggle = () => {
    const [visible, setVisibile] = useState(true);

    return <>
        <h3>Styled Component</h3>
        <button onClick={() => setVisibile(!visible)}>Toggle</button>
        <p>Visibility: <span role="img" aria-label="visibility">{visible ? '🤘' : '⛔'}</span></p>
        {visible ? <Image /> : null}
    </>
}

export default StyledToggle;