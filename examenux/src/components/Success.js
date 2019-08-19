import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        
  
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Usuario creado exitosamente"/>
                        
                        <h1>Gracias por suscribrite</h1>
                        <p>Te enviaremos un email con futuras instrucciones</p>
                    
                </React.Fragment>
            </MuiThemeProvider>
            
        );
    }
}

export default Success;