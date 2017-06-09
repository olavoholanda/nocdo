import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Master from './components/pages/Master';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Master />
            </MuiThemeProvider>
        );
    }
}

export default App;
