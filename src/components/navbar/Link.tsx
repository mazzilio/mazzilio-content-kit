import { SelectedPage } from "@/types/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Interfaces vs types, just stay consistent with one and stick with it rather than switching between the two
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
};

function Link({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuOpen,
  isMenuOpen,
}: Props) {
  // It doesn't know we've converted this to a SelectedPage enum so we explicitly define it :D
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink // Uses ids to find where to go to on our page, which is connected to the component
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuOpen(!isMenuOpen);
      }}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    //   Can also put in transitions and other interactivity into the site 
      transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
