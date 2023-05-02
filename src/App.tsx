// https://www.youtube.com/watch?v=I2NNxr3WPDo

// If you put index.tsx/jsx in a file, you can reference that file directly rather than the file name
import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "./types/navbar";
import Rates from "./pages/rates";
import CurrentCampaigns from "./pages/currentCampaigns";
import ContactUs from "./pages/contactus";
import Footer from "./components/footer";
import AboutMe from "./pages/aboutme";

// inspo
// https://thecompleteboutique.com/about

// Enum
// Enums exist in the actual build as it's used in place of the string

// TSX - TS Component Files
// TS - regular typescript files that have types/functions to use - semantic thing to let people know what they are

function App() {
  // YOU CAN BE EXPLICIT WITH TYPES FOR STATES but IDEs can also label this for you if needed
  // try to be restrictive where relevant, such as creating custom types :)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    // Can assign enums in the state using property accessing
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Adding when the component unmounts / when the component disappears
    return () => {
      // Allow us to remove it when we leave the page, otherwise there will be memory leaks and bugs
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20 bg-gray-50">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
       <Home setSelectedPage={setSelectedPage} />
      <AboutMe setSelectedPage={setSelectedPage} />
      <CurrentCampaigns setSelectedPage={setSelectedPage} />
      <Rates setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} /> 
      <Footer />
    </div>
  );
}

export default App;
