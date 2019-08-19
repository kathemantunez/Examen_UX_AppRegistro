import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values,handleChange} =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Ingresa tu informacion personal"/>
                    <TextField
                        hintText="Ingresa tu Ocupación"
                        floatingLabelText="Ocupación"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hintText="Ingresa tu ciudad"
                        floatingLabelText="Ciudad"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Ingresa tu Biografia"
                        floatingLabelText="Biografia"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    /> 
                    <RaisedButton
                        label="Regresar"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
            
        );
    }
}
const styles= {
    button:{
        margin:15
    }
};

export default FormPersonalDetails