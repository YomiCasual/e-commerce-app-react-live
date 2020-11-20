import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Context } from './components/context/context';
 


ReactDOM.render(
	<Context>
	<Router>
	<App />
	</Router>
	</Context>
	,document.getElementById('root'));


