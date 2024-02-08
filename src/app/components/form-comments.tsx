"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type FormCommentProp = {
	postId: string;
};

export default function FormComment({ postId }: FormCommentProp) {
	const [comment, setComment] = useState<string>("");
	const router = useRouter();
	const { data } = useSession();
	// console.log("postID", postId);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setComment(event.target.value);
	}
	async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
		if (comment.trim() != "") {
			try {
				const newComment = await axios.post("/api/comments", {
					postId,
					text: comment,
				});
				if (newComment.status === 200) {
					router.refresh();
					setComment("");
				}
			} catch (error) {
				console.error(error);
			}
		}
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
				<button
					className="btn btn-info mt-4"
					onClick={handleSubmit}
					disabled={!data?.user?.email}
				>
					Submit Comment
				</button>
			</div>
		</div>
	);
}
