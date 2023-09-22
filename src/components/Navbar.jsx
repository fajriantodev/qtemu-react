const Navbar = () => {
	return (
		<nav className="sticky top-0 border-b bg-white">
			<div className="container flex h-16 items-center justify-between">
				<ul className="flex items-center space-x-8 lg:space-x-14">
					<li>
						<a
							href="/"
							className="text-xl font-bold text-orange-600 hover:text-orange-500"
						>
							QTemu
						</a>
					</li>
					<li>
						<a href="/" className="text-gray-900 hover:text-orange-500">
							Create Mockup
						</a>
					</li>
					<li>
						<a href="/" className="text-gray-900 hover:text-orange-500">
							Explore
						</a>
					</li>
				</ul>
				<button
					type="button"
					className="rounded bg-orange-600 px-6 py-2 text-white hover:bg-orange-700"
				>
					Login
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
