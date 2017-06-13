import React from 'react'
import {render} from 'react-dom'
import Routes from './components/utils/Routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render(<Routes />, document.getElementById('root'));
registerServiceWorker();
