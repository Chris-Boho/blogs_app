import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function Header() {
	const session = await getServerSession(authOptions);
	return (
		<header className="bg-blue-600 p-4">
			<nav className="flex justify-between items-center max-w-4xl mx-auto">
				<Link href="/" className="text-white text-2xl font-bold">
					My Blog
				</Link>

				<ul className="flex space-x-4">
					<li>
						<Link
							href="/blogs"
							className="text-white hover:underline"
						>
							Blogs
						</Link>
					</li>
					<li>
						<Link
							href="/api/auth/signin"
							className="text-white hover:underline"
						>
							login
						</Link>
					</li>
					<li>
						{session?.user ? (
							<img
								src={session.user.image!}
								alt="Profile Image"
								className="w-10 h-10 rounded-full bg-gray-300"
							/>
						) : (
							<div className="w-10 h-10 rounded-full bg-gray-300"></div>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
}
