import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import RentpromptsStoryBlock from "./component/RentpromptsStoryBlock";
import WhyRentpromptsSection from "./component/WhyRentpromptsSection";
import LatestAIApps from "./component/LatestAIApps";
import LatestProductsSlider from "./component/LatestProductsSlider";
import Testimonials from "./component/Testimonials";
import StatsSection from "./component/StatsSection";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative isolate bg-[#0b1437] md:pt-[calc(0px)] pt-5">
        <HeroSection />
      </div>
      <RentpromptsStoryBlock />
      <WhyRentpromptsSection />
      <StatsSection />
      <LatestAIApps />
      <LatestProductsSlider />
      <div className="text-white bg-gradient-to-b from-[#2b22a9] to-[#7d66ce] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-2.5">
        <Testimonials />
      </div>
      {/* <h1 className="text-blue-600">Vite + React</h1> */}
    </div>
  );
}

export default App;
