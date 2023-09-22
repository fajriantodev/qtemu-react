const PastMeetupCard = ({ title, date, went }) => {
	return (
		<div className="rounded-lg border bg-gray-100 p-5 text-gray-900">
			<p className="border-b pb-3">{title}</p>
			<p className="mt-3">{date}</p>
			<p className="mt-3">{went}</p>
			<button
				type="button"
				className="mt-4 rounded bg-orange-600 px-6 py-2 text-white hover:bg-orange-700"
			>
				View
			</button>
		</div>
	);
};

export default PastMeetupCard;
