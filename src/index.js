import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CoreLayout from "./layouts/CoreLayout";
import "./index.css";

import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <CoreLayout/>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}


render(<App />, document.getElementById('root'));
