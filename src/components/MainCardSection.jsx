const MainCardSection = () => {
	return (
		<div className="mt-5 rounded-lg border bg-gray-100 p-5">
			<div className="flex flex-col space-x-5 space-y-5 lg:flex-row lg:space-y-0">
				<img
					src="https://dummyimage.com/200x200/fb923c/fff"
					alt="Dummy"
					className="rounded-lg"
				/>
				<div>
					<div className="space-y-2">
						<h1 className="text-2xl font-bold text-orange-600">
							Hacktiv8 Meetup
						</h1>
						<div className="grid grid-cols-2">
							<p>Location</p>
							<p>Jakarta, Indonesia</p>
						</div>
						<div className="grid grid-cols-2">
							<p>Members</p>
							<p>1078</p>
						</div>
						<div className="grid grid-cols-2">
							<p>Organizers</p>
							<p>Adhy Wiranata</p>
						</div>
					</div>
					<button
						type="button"
						className="mt-4 rounded bg-orange-600 px-8 py-2 text-white hover:bg-orange-700"
					>
						Join Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardSection;
