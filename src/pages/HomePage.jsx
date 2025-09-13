// import DonationPool from "../components/DonationPool.jsx";
import HeroSection from "../components/HeroSection.jsx";
// import RecordsDataComponent from "../components/RecordsDataComponent.jsx";
// import SponsorSection from "../components/SponsorSection.jsx";
// import UpcomingFamilies from "../components/UpcomingFamilies.jsx";
import FamilyForm from '../forms/FamilyForm.jsx'
const HomePage = () => {
  return (
    <>
      <div className="flex h-100">
        <HeroSection />
        {/* <RecordsDataComponent />
        <DonationPool />
        <UpcomingFamilies />
        <SponsorSection /> */}
        <FamilyForm />
      </div>
    </>
  );
};

export default HomePage;
