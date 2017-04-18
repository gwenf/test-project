import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


import Grid from './components/Grid'

export default class App extends Component {
  render() {
    return (
        <Router>
        <div>
        	<div className='row'>

        		<ul className='menu'>
					<li className='menu-text'>Test App</li>
				</ul>

			</div>

			<div className='row'>
				<Route exact={true} path='/' component={Grid}/>
			</div>

		</div>
	    </Router>
    );
  }
}
