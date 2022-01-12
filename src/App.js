import './App.scss';

import { Provider } from 'react-redux';
import createStore from 'store/createStore';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from 'router';

function App() {
	const store = createStore();

	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<RouterIndex />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
