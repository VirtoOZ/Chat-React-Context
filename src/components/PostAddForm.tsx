import { FC, useState, ChangeEvent, SubmitEvent } from "react";
import '../styles/post-add-form.css'
import { usePost } from "../contexts";

export const PostAddForm: FC = () => {
	const { addPost } = usePost();
	const [inputValue, setInputValue] = useState('');

	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;
		setInputValue(inputVal);
	};

	const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost(inputValue);
		setInputValue('');
	};

	return (
		<form
			onSubmit={onSubmit}
			action="submit"
			className="bottom-panel"
		>
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="Ваши мысли"
				onChange={onValueChange}
				value={inputValue}
			/>
			{/* <button */}
			<button type="submit"
				className="btn btn-outline-secondary"
			// onClick={() => addPost('hello')}
			>
				Добавить
			</button>
		</form>
	);
};