import React from 'react';
// import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components';
import { PostProvider } from './contexts';
import './libs/bootstrap/bootstrap.min.css';
import './libs/font-awesome/css/font-awesome.min.css';
import './styles/main.css';

const root = document.querySelector('#root')
	|| document.querySelector('.wrapper');

root ?
	createRoot(root).render(
		// <StrictMode>
		<PostProvider>
			<App />
		</PostProvider>
		// </StrictMode>
	) : console.error('HTML не содержит точки входа для REACT!');