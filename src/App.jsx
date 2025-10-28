//App.js

import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import { data } from './data.js'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
	const mappedData = data.map((item) => {
		return (
			<Cards key={item.id} item={item} />
		)
	})
	return (
		<div className="App">
			<Header />
			{mappedData}
			<Footer />
		</div>
	);
}

export default App;
