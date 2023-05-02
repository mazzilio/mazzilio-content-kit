import HeaderText from "../HeaderText";
import Headshot from "@/assets/Headshot.png";

const AboutMeCard = () => {
  return (
    <div className="flex flex-col justify-center px-10 py-10 md:w-3/5">
      <div className="hidden justify-center md:flex ">
        {" "}
        <img
          alt="headshot here"
          src={Headshot}
          className="fixed mb-2  h-[200px] w-[200px] justify-self-center rounded-full object-cover md:-top-[100px]"
        />
      </div>

      <div className="h-full w-full rounded-md bg-primary-300">
        <div className="m-10 mt-20 flex flex-col items-center">
          <h4 className="mb-5">
            Engineer. <span className="text-secondary-400">Creator.</span>{" "}
            Learner.
          </h4>
          <HeaderText>Hi. I'm Maz.</HeaderText>
          <p className="mt-5">
            Mariam is an award-winning Software Engineer based in Manchester,
            UK. She has experience in web development and software solutions,
            alongside extensive social media marketing from her previous roles.
          </p>
          <p className="mt-5">
            Information about my content creation, focus and outcomes and
            current partnerships.
          </p>
          <p className="mt-5">
            As an avid content creator, Mariam's focus has been on growing her
            TikTok following with varying campaigns. Her most recent
            accomplishment is her user generated content on her experience with
            the Japanese Government's MIRAI Programme,{" "}
            <span className="font-bold text-primary-500">
              generating over 250,000 impressions on TikTok.
            </span>
          </p>

          <div className="mt-4 flex gap-8">
            <div className="flex h-[80px] w-[80px] rounded-full bg-primary-100">
              <a href="https://www.youtube.com/channel/UCigLjF1__VSRe2xUJCDdSIA">
                <img
                  alt="YouTube - @mazzilio"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"
                  className="h-30 hover:scale-125"
                />
              </a>
            </div>

            <div className="flex h-[80px] w-[80px] justify-center rounded-full bg-primary-100">
              <a href="https://www.tiktok.com/@mazzilio">
                <img
                  alt="TikTok - @mazzilio"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png"
                  className="mt-4 h-12 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
