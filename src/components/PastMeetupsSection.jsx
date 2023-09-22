import PastMeetupCard from "./PastMeetupCard";

const pastMeetups = [
	{
		title: "#39 JakartaJS April Meetup with kumparan",
		date: "27 November 2017",
		went: "139 went",
	},
	{
		title: "#39 JakartaJS April Meetup with kumparan",
		date: "27 November 2017",
		went: "139 went",
	},
	{
		title: "#39 JakartaJS April Meetup with kumparan",
		date: "27 November 2017",
		went: "139 went",
	},
];

const PastMeetupsSection = () => {
	return (
		<div className="mt-5">
			<h2 className="text-xl font-bold text-orange-600">Past Meetups</h2>
			<div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-3 lg:gap-y-0">
				{pastMeetups.map((meetup, index) => (
					<PastMeetupCard
						key={index}
						title={meetup.title}
						date={meetup.date}
						went={meetup.went}
					/>
				))}
			</div>
		</div>
	);
};

export default PastMeetupsSection;
