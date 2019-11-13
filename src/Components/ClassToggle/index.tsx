import React, { Component } from 'react';
import './style.css';

type ClassProps = {

};

type ClassState = {
    visible: boolean,
};

class ClassToggle extends Component<ClassProps, ClassState> {
    constructor(props:any) {
        super(props);

        this.state = {
            visible: true,
        };
    }

    setVisible(visible:boolean) {
        this.setState({
            visible: visible,
        });
    }

    render() {
        return (
            <>
                <h3>Class Component</h3>
                <button onClick={() => this.setVisible(!this.state.visible)}>Toggle</button>
                <p>Visibility: <span role="img" aria-label="visibility">{this.state.visible ? '✅' : '❌'}</span></p>
                {this.state.visible ? <div className="image-background-class"></div> : null}
            </>
        )
    }
}

export default ClassToggle;