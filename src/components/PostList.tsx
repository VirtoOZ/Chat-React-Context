import { FC } from "react";
import { PostListItem } from "./PostListItem";
import { usePost } from "../contexts";
import '../styles/post-list.css';
import { Post } from "../types";

export const PostList: FC = () => {
	const { posts, serchPost, filerPosts } = usePost();
	const visiblePost: Post[] = filerPosts(serchPost(posts.post, posts.term), posts.filters);

	const postListItem = visiblePost.map(post => {
		return <li className="list-group-item" key={post.id}>
			<PostListItem post={post} />
		</li>
	});

	return (
		<ul className="app-list list-group">
			{postListItem}
		</ul >
	);
};