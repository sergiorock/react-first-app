import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Aplicacion from './components/Aplicacion'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Aplicacion />, document.getElementById('root'));

serviceWorker.unregister();
