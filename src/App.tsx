import Navbar from './components/Navbar';
import ListProduct from './components/ListProduct';
import Header from './components/Header';

function App() {
	return (
		<div className='relative flex h-screen w-full flex-col overflow-y-scroll bg-gray-200'>
			<Navbar />
			<Header />
			<ListProduct />
		</div>
	);
}

export default App;
