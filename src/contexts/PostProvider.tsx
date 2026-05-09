import { FC, useEffect, useMemo, useState } from "react"
import { PostContext } from "./PostContext";
import { AppSatate, Post, PostProviderProps } from "../types";

const DEFAULT_DATA: AppSatate = {
	post: [
		{ label: 'Going to learn React', important: false, id: 'ssss', like: false },
		{ label: 'Going to learn JSX', important: false, id: 'jjj', like: false },
		{ label: 'Going to learn TypeScript', important: false, id: 'kkkk', like: false }
	],
	term: '',
	filters: 'all',
};

export const PostProvider: FC<PostProviderProps> = ({ children }) => {
	const [posts, setPost] = useState(DEFAULT_DATA);
	const [likeLength, setlikeLength] = useState(0);
	const idkey = 4;

	const deletePost = (id: string) => {
		const newPostsArr = posts.post.filter(post => post.id !== id);
		setPost((old: AppSatate) => ({
			...old,
			post: newPostsArr
		}));
	};

	const addPost = (body: string) => {
		const newItem = {
			label: body,
			important: false,
			id: `${idkey + 1}-${posts.post.length}`,
			like: false,
		};
		setPost((oldPost: AppSatate) => ({
			...oldPost,
			post: [...oldPost.post, newItem]
		}));
	};

	const importantPost = (id: string) => {
		const newArr = posts.post.map(post => {
			if (post.id === id) return {
				label: post.label,
				important: !post.important,
				id: post.id,
				like: post.like,
			};
			return post;
		});
		setPost((old: AppSatate) => ({
			...old,
			post: newArr,
		}));
	};

	const calcLike = () => {
		const liked = posts.post.filter(post => post.like).length;
		setlikeLength(liked);
	};

	const likePost = (id: string) => {
		const newPostsArr = posts.post.map(post => {
			if (post.id === id) return {
				label: post.label,
				important: post.important,
				id: post.id,
				like: !post.like,
			};
			return post;
		});
		setPost((old: AppSatate) => ({
			...old,
			post: newPostsArr
		}));
	};

	const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value;
		setPost((old: AppSatate) => ({
			...old,
			term
		}));
	};

	const serchPost = (items: Post[], term: string) => {
		if (term.length === 0) return items;
		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	};

	const filerPosts = (items: Post[], filters: string) => {
		if (filters === 'like') {
			return items.filter(item => item.like)
		} else return items;
	};

	const setFilter = (filters: 'all' | 'like') => {
		switch (filters) {
			case 'all':
				return setPost((old: AppSatate) => ({
					...old,
					filters: 'all'
				}));
			case 'like':
				return setPost((old: AppSatate) => ({
					...old,
					filters: 'like'
				}));
		}
	};

	useEffect(() => {
		calcLike();
	}, [posts]);

	const value = useMemo(() => ({
		posts,
		deletePost,
		importantPost,
		likeLength,
		calcLike,
		likePost,
		setlikeLength,
		addPost,
		onFilter,
		serchPost,
		filerPosts,
		setFilter,
	}), [
		posts,
		deletePost,
		importantPost,
		likeLength,
		calcLike,
		likePost,
		setlikeLength,
		addPost,
		onFilter,
		serchPost,
		filerPosts,
		setFilter,
	]);

	return (
		<PostContext.Provider value={value}>
			{children}
		</PostContext.Provider>
	);
};