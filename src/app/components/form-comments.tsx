"use client";

import React, { useState } from "react";

export default function FormComment() {
	const [comment, setComment] = useState<string>("");

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		setComment(event.target.value);
	}
	function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		console.log(comment);
	}

	return (
		<div>
			<div className="mt-4">
				<label
					htmlFor="comment"
					className="block text-gray-100 text-sm font-bold mb-2"
				>
					Add Comment
				</label>
				<input
					type="text"
					name="comment"
					className="input input-info bg-slate-300 w-full text-black"
					placeholder="Enter your comment"
					value={comment}
					onChange={handleChange}
				/>
				<button className="btn btn-info mt-4" onClick={handleSubmit}>
					Submit Comment
				</button>
			</div>
		</div>
	);
}
