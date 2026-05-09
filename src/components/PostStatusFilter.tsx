import { FC } from "react"
import { usePost } from "../contexts";

export const PostStatusFilter: FC = () => {
	const { setFilter } = usePost();
	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-info"
				onClick={() => setFilter('all')}
			>Все</button>
			<button
				type="button"
				className="btn btn-outline-secondary"
				onClick={() => setFilter('like')}
			>Понравилось</button>
		</div>
	);
};