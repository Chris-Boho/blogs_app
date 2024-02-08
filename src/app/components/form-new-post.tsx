"use client";
import React, { useState } from "react";
import { FormData } from "../types/blogTypes";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormNewPost() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		content: "",
	});

	const { data } = useSession();
	const router = useRouter();
	function handleChange(
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		event.preventDefault();
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			const response = await axios.post("/api/posts", formData);
			if (response.status === 200) {
				router.push(`/blogs/${response.data.newPost.id}`);
			}
		} catch (error) {
			console.error(error);
		}
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
			<button
				type="submit"
				className="btn btn-primary w-full"
				disabled={!data?.user?.email}
			>
				Submit
			</button>
		</form>
	);
}
