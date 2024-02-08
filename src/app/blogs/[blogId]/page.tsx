import Comments from "@/app/components/comments";
import FormComment from "@/app/components/form-comments";
import prisma from "@/lib/db";

type BlogProps = {
	params: {
		blogId: string;
	};
};

async function BlogPage({ params }: BlogProps) {
	const post = await prisma.post.findFirst({
		where: {
			id: params.blogId,
		},
		include: {
			author: true,
		},
	});
	console.log("-------------------------------------------------");
	console.log(post);
	console.log(params.blogId);
	return (
		<div className="max-w-4xl mx-auto py-8">
			<h1 className="text-3xl font-bold">{post?.title}</h1>
			<p>Written by: {post?.author?.name}</p>
			<div className="mt-4">{post?.content}</div>
			<Comments postId={params.blogId} />
			<FormComment postId={params.blogId} />
		</div>
	);
}

export default BlogPage;
