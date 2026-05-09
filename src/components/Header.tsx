import { FC } from "react";
import '../styles/header.css';
import { usePost } from "../contexts";

export const Header: FC = () => {
	const { posts, likeLength } = usePost();
	return (
		<header className="app-header">
			<h1>VirtoOZ</h1>
			<h2>{posts.post.length} записей, из них понравилось {likeLength}</h2>
		</header>
	)
};