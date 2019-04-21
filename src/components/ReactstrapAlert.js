import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ReactstrapAlert extends Component{

    render(){

        return(
            <div className="alert component">
                <h3 className="text-center text-secondary button-header">Reactstrap Alert</h3>
                <Alert color="primary"> This is a primary alert</Alert>
                <Alert color="secondary"> This is a secondary alert</Alert>
                <Alert color="danger"> This is a danger alert</Alert>
                <Alert color="warning"> This is a warning alert</Alert>
                <Alert color="info"> This is a info alert</Alert>
            </div>
        )
    }

}

export default ReactstrapAlert;