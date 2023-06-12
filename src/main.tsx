import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartContextProvider } from './contexts/cart.tsx';
import { FilterContextProvider } from './contexts/filter.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CartContextProvider>
			<FilterContextProvider>
				<App />
			</FilterContextProvider>
		</CartContextProvider>
	</React.StrictMode>
);
