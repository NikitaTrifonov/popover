import "./App.css";
import { Background } from './components/background';
import { Body } from './components/body/body';
import { Header } from './components/header/header';

function App() {
    return <div className="app_wrapper">
		<div className="app_content">
			<Header />
			<Body />
			<Background />
		</div>
	</div>;
}

export default App;
