import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/navbar";
import ActionButton from "@/components/actionbutton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo.svg";
import LogoM from "@/assets/mazzilio.svg";
import CFGLogo from "@/assets/CFGLogo.png";
import MIRAI from "@/assets/MIRAI.svg";
import HomePageImage from "@/assets/HomePageImage.svg";

type Props = { setSelectedPage: (value: SelectedPage) => void };

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    // For react anchor and link scroll, we need to use id's to make sure the website knows which sections to navigate to
    // md - medium screens and above will apply full height and padding bottom of 0
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // This will set the highlighted navbar text to appear over what is being viewed
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            // set the initial and final state with semantic keywords
            initial="hidden"
            whileInView="visible"
            // only trigger the animation once
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 1 },
            }}
          >
            <div className="relative">
              <div className="absolute -top-[20px] left-[100px] z-[-9] w-[900px] opacity-20 md:content-logo" />
              <img alt="home-page-text" src={Logo} className="h-[250px] " />
            </div>
            {/* Paragraph about stuff */}

            <p className="mt-4 text-sm ">
              As an experienced professional in the tech industry and the
              start-up space, I have a strong background in social media, event
              management, public speaking, and content creation. I am passionate
              about promoting accessibility in tech for women and non-binary
              individuals, and have advocated for diversity and inclusion in the
              industry.
            </p>
            <p className="mt-4 text-sm ">
              I have leveraged my knowledge to deliver high-quality content on
              working and entering tech, as well as other related topics. I have
              also had the opportunity to speak at a number of industry events,
              sharing my expertise and insights with audiences.
            </p>
          </motion.div>
          {/* CTA */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            // only trigger the animation once
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 1 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Learn More
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 hover:text-secondary-500 hover:underline"
              onClick={() => setSelectedPage(SelectedPage.CurrentCampaigns)}
              href={`#${SelectedPage.CurrentCampaigns}`}
            >
              <p>Current Campaigns</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 1 },
          }}
          className="flex basis-3/5 justify-center md:z-10
                        md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            alt="home-page-graphic"
            src={HomePageImage}
            className="h-[450px] w-[900px] md:h-[900px]"
          />
        </motion.div>
      </motion.div>

      {/* Sponsors / Collaborations*/}

      {isAboveMediumScreens && (
        // Don't resort to absolute positioning, flex boxes and grid will be more suitable for different screen sizes
        <div className="h-[300px] w-full bg-primary-100 py-10 ">
          <div className="mx-auto w-5/6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 1 },
              }}
              className="flex w-5/6 items-center justify-between gap-8"
            >
              <img
                alt="sponsor 1"
                src={CFGLogo}
                className="relative -top-10 h-[150px]"
              />
              <img
                alt="sponsor 1"
                src={LogoM}
                className="relative -top-10 h-[140px]"
              />

              <img
                alt="sponsor 1"
                src={MIRAI}
                className="relative -top-10 h-[140px]"
              />
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
