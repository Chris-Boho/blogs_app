import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import Logout from "./logout";

export async function Header() {
	const user = await getCurrentUser();
	return (
		<header className="bg-blue-600 p-4">
			<nav className="flex justify-between items-center max-w-4xl mx-auto">
				<Link href="/" className="text-white text-2xl font-bold">
					My Blog
				</Link>

				<ul className="flex space-x-4 items-center">
					<li>
						<Link
							href="/blogs"
							className="text-white hover:underline"
						>
							Blogs
						</Link>
					</li>
					{user?.name ? (
						<Logout />
					) : (
						<li>
							<Link
								href="/api/auth/signin"
								className="text-white hover:underline"
							>
								Login
							</Link>
						</li>
					)}
					<li>
						{user ? (
							<img
								src={user.image!}
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
