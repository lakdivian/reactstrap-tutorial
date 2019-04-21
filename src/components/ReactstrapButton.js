import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ReactstrapButton extends Component{

    render(){
    return(
    
        <div className="component button">
            <h3 className="text-center text-secondary button-header">Reactstrap Buttons</h3>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>{' '}
        </div>
    )
    }
}

export default ReactstrapButton;