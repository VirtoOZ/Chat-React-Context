import { FC } from 'react';
import {
	Header, PostAddForm, PostList,
	PostSerchPanel, PostStatusFilter
} from '.';
import '../styles/app.css';

export const App: FC = () => {
	return (
		<section className='app'>
			<Header />
			<div className="search-panel">
				<PostSerchPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</section>
	)
};