import Link from "next/link";

export default function Layout({ children }) {
	return (
		<>
			<main>{children}</main>
			<Link
				href="/"
			>
				<h2>
					Home <span>-&gt;</span>
				</h2>
				<p>
					Go back to the Home page
				</p>
			</Link>
		</>
	)
}
