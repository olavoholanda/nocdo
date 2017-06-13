import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App'

class Routes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    {/*<Route path='/map' component={Map}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    {/*<Route path='/foo' component={Foo}/>*/}
                    {/*<Route component={NotFound}/>*/}
                </Switch>
                {/* add the routes here */}
            </BrowserRouter>
        )
    }
}

export default Routes;



