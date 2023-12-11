import Comments from "@/app/components/comments";
import FormComment from "@/app/components/form-comments";

function BlogPage() {
	return (
		<div className="max-w-4xl mx-auto py-8">
			<h1 className="text-3xl font-bold">Post 1</h1>
			<p>Written by: John Doe</p>
			<div className="mt-4">content</div>
			<Comments />
			<FormComment />
		</div>
	);
}

export default BlogPage;
