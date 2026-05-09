import { createContext } from "react";
import { PostContextProps } from "../types";

export const PostContext = createContext<PostContextProps>({
	posts: { post: [], term: '', filters: '' },
	deletePost: () => { },
	importantPost: () => { },
	likePost: () => { },
	likeLength: 0,
	calcLike: () => { },
	addPost: () => { },
	onFilter: (e) => { },
	serchPost: (items, term) => [],
	filerPosts: (items, filters) => [],
	setFilter: (filter) => []
})