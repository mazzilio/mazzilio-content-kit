import { useState } from "react";
// https://heroicons.com/
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../../types/navbar";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/actionbutton";
import Logo from "@/assets/Logo.png";
import { navBarItems } from "@/items/navBarItems";
import { navBarType } from "@/types/navbartype";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const index = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";

  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow transition duration-1000";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition duration-1000`}
      >
        <div className={`${flexBetween}  mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="" src={Logo} className="h-[50px]" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween}  gap-8 text-base`}>
                  {navBarItems.map((navBarItem: navBarType) => (
                    <Link
                      key={navBarItem.id}
                      page={navBarItem.page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      setIsMenuOpen={setIsMenuOpen}
                      isMenuOpen={isMenuOpen}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-10`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Let's connect!
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Bars3Icon className="h6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuOpen && (
        // Square brackets used to do exact pixels for tailwind
        // Non-brackets like w-6 is an arbitrary number that randomly works for the situation based on tailwind measurements
        <div className="fixed bottom-0 right-0 z-40 h-full w-2/5 bg-primary-100 drop-shadow-xl md:w-[300px]">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-secondary-500" />
            </button>
          </div>
          <div className="ml-[15%] flex flex-col gap-12 text-base">
            {navBarItems.map((navBarItem: navBarType) => (
              <Link
                key={navBarItem.id}
                page={navBarItem.page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default index;
