import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {faUser, faFileAlt, faEye, faEyeSlash, faUserCircle, faFileImage} from '@fortawesome/free-solid-svg-icons';
import StartScreen from './Containers/StartScreen';
library.add(faUser, faFileAlt, faEye, faEyeSlash, faUserCircle, faFileImage);

const store = createStore(rootReducer);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route exact path="/" component={StartScreen} />
				</Router>
			</Provider>
		);
	}
}

export default App;
