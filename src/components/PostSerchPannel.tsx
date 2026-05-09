import { FC } from "react";
import '../styles/search-panel.css';
import { usePost } from "../contexts";

export const PostSerchPanel: FC = () => {
	const { onFilter } = usePost();
	return (
		<input
			name="a"
			type="text"
			className="form-control search-input"
			placeholder="Поиск по записи"
			onChange={onFilter}
		>
		</input>
	)
};