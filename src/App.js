import Navbar from "./components/Navbar";
import MainCardSection from "./components/MainCardSection";
import NextMeetupSection from "./components/NextMeetupSection";
import AboutMeetupSection from "./components/AboutMeetupSection";
import MembersSection from "./components/MembersSection";
import PastMeetupsSection from "./components/PastMeetupsSection";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* Content */}
			<div className="container">
				<MainCardSection />
				<NextMeetupSection />
				<AboutMeetupSection />
				<MembersSection />
				<PastMeetupsSection />
			</div>

			{/* Footer */}
			<Footer />
		</>
	);
}

export default App;
