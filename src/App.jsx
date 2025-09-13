import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import FamilyGallery from "./pages/FamilyGallery";
import SubmitPage from "./pages/SubmitPage";
// import CampaignForm from './forms/CampaignForm'
import StatusUpdate from './Network/safety/StatusUpdate';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/families" element={<FamilyGallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/status" element={<StatusUpdate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
