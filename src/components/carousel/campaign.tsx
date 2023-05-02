import { ongoingCampaigns } from "@/items/currentCampaign";
import { CampaignsType } from "@/types/campaignstype";
import useMediaQuery from "@/hooks/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Docs: https://react-slick.neostack.com/docs/example/auto-play-methods

const Campaign = () => {
  // Set-up of slider component settings

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const campaignSliderSettings = {
    arrows: true,
    dot: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipe: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mediumScreenOverlay = `p-2 absolute z-30 flex
 flex-col items-center justify-center h-96 w-96
whitespace-normal bg-primary-500 text-center text-white
opacity-0 transition duration-500 hover:opacity-90 `;

  return (
    <div className="mt-10 flex flex-row items-center justify-center ">
      {isAboveMediumScreens ? (
        <Slider
          {...campaignSliderSettings}
          className="w-[80%]"
          aria-label="poop"
        >
          {ongoingCampaigns.map((campaign: CampaignsType) => (
            <div className="h-96 w-[66%] " aria-label="poop">
              <div className={mediumScreenOverlay}>
                <h1
                  className="mb-[10px] text-lg text-secondary-500"
                  aria-label="poop2"
                >
                  {campaign.name}
                </h1>
                <p>{campaign.description}</p>
                <a
                  href={campaign.campaignLink}
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-secondary-400 hover:underline"
                >
                  Example Content
                </a>
              </div>
              <img
                src={campaign.image}
                alt={campaign.name}
                className=" h-96 w-96 object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...campaignSliderSettings} className="w-5/6">
          {ongoingCampaigns.map((campaign: CampaignsType) => (
            <div className="w-[70%]">
              <div className="mx-4 w-5/6">
                <img
                  src={campaign.image}
                  alt={campaign.name}
                  className="h-96 w-96 object-cover"
                />
              </div>
              <div className="mx-4 w-[60%] md:mx-32">
                <h1 className="m-auto text-lg text-secondary-500">
                  {campaign.name}
                </h1>
                <p>{campaign.description}</p>
                <a
                  href={campaign.campaignLink}
                  target="_blank"
                  className="text-sm text-secondary-400 hover:text-primary-500 hover:underline"
                >
                  Example Content
                </a>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Campaign;
