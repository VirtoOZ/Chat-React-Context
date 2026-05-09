import { ReactNode } from "react";

export interface PostProviderProps {
	children: ReactNode;
};
export interface PostContextProps {
	posts: AppSatate;
	deletePost: (id: string) => void;
	importantPost: (id: string) => void;
	likePost: (id: string) => void;
	calcLike: () => void;
	likeLength: number;
	addPost: (body: string) => void;
	onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
	serchPost: (items: Post[], term: string) => Post[],
	filerPosts: (items: Post[], filters: string) => Post[],
	setFilter: (filter: 'all' | 'like') => void;
};

export interface Post {
	label: string;
	important: boolean;
	id: string;
	like: boolean;
};

export interface AppSatate {
	post: Post[],
	term: string,
	filters: string,
}

export interface PostListItemProps {
	post: Post;

};