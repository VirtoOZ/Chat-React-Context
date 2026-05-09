import { FC, useState } from "react";
import { Button } from 'react-bootstrap';
import { PostListItemProps } from "../types";
import '../styles/post-list-item.css';
import { usePost } from "../contexts";

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
	const { label, important = false, id, like } = post;
	// const [like, setLike] = useState(false);
	let classItem = 'app-list-item';
	if (important) classItem += ' important';
	if (like) classItem += ' like';

	const { deletePost, importantPost, likePost } = usePost();

	return (
		<div
			className={classItem}>
			<span
				onClick={() => likePost(id)}
				className="app-list-item-label">
				{label}
			</span>
			<div className="btn-wrapper">
				<button
					type="button"
					className="btn-star btn-sm"
					onClick={() => importantPost(id)}
				>
					<i className="fa fa-star">
					</i>
				</button>
				<button
					type="button"
					className="btn-trash btn-sm"
					onClick={() => deletePost(id)}
				>
					<i className="fa fa-trash-o">
					</i>
				</button>
				<i className="fa fa-heart"></i>
			</div>
		</div >
	);
};