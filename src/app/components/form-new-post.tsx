"use client";
import React, { useState } from "react";
import { FormData } from "../types/blogTypes";

export default function FormNewPost() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		content: "",
	});

	function handleChange(
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		event.preventDefault();
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(formData);
	}

	return (
		<form
			className="border rounded-lg max-w-md mx-auto p-4"
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<input
					type="text"
					className="input input-bordered input-primary rounded-md w-full py-2 px-3"
					placeholder="Enter the title"
					name="title"
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4">
				<textarea
					className="textarea textarea-primary w-full"
					name="content"
					placeholder="Enter the content"
					rows={5}
					value={formData.content}
					onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary w-full">
				Submit
			</button>
		</form>
	);
}
