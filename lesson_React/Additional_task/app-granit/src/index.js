import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap-grid.min.css';
import './css/index.css';
import Header from './header';
import Menu from './menu';
import Description from './description';
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {

	render() {
		return (
			<div className="main-display">
					<Header />
					<Menu />
					<Description />
			</div>
		)
	}

}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
