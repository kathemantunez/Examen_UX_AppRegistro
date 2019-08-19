import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
          } = this.props;

          //local storage
          var cadena="["+firstName+","+lastName+","+email+","+occupation+","+city+","+bio+"]";
        localStorage.setItem('Persona',cadena);

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Confirmación de datos"/>
                    <List>
                        <ListItem primaryText="Nombre" secondaryText={firstName}/>
                        <ListItem primaryText="Apellido" secondaryText={lastName}/>
                        <ListItem primaryText="Email" secondaryText={email}/>
                        <ListItem primaryText="Ocupación" secondaryText={occupation}/>
                        <ListItem primaryText="Ciudad" secondaryText={city}/>
                        <ListItem primaryText="Biografia" secondaryText={bio}/>
                    </List>
                    <RaisedButton
                        label="Confirmar y Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        
                    />
                    <RaisedButton
                        label="Regresar"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                    
                    
                </React.Fragment>
            </MuiThemeProvider>
            
            
        );
        //localstorage
        
    }
}
const styles= {
    button:{
        margin:15
    }
};

export default Confirm;