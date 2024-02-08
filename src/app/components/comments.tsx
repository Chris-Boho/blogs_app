import React from "react";
import prisma from "@/lib/db";

type CommentsProps = {
	postId: string;
};

export default async function Comments({ postId }: CommentsProps) {
	const comments = await prisma.comments.findMany({
		where: {
			postId,
		},
		include: {
			author: true,
		},
	});
	// console.log("post comments", comments);
	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold">Comments</h2>
			<ul>
				{comments.map((comment) => (
					<li key={comment.id} className="mb-4 bg-slate-300 p-2">
						<div className="flex items-center mb-2">
							<div className="text-blue-500 font-bold mr-2">
								{comment.author?.name}
							</div>
							<div className="text-gray-500">
								{comment.createdAt.toDateString()}
							</div>
						</div>
						<p className="text-black">{comment.text}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
