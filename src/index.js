import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CoreLayout from "./layouts/CoreLayout";
import LandingPageLayout from "./layouts/LandingPageLayout";
import "./index.css";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500, deepOrange700, deepOrange100, blueGrey500} from "material-ui/styles/colors";

import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

localStorage.setItem("role", "ROLE_MANAGER");


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepOrange500,
        primary2Color: deepOrange700,
        primary3Color: deepOrange100,
        accent1Color: blueGrey500,
        pickerHeaderColor: deepOrange500,
    },
    appBar: {
        height: 50,
    },
});

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={LandingPageLayout}/>
                            <Route path="/in" component={CoreLayout}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}


render(<App />, document.getElementById('root'));
