import HeaderText from "@/components/HeaderText";
import Campaign from "@/components/carousel/campaign";

import { SelectedPage } from "@/types/navbar";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const CurrentCampaigns = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-300 py-40" id="campaigns">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.CurrentCampaigns)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>Current Content</HeaderText>
            <p className="py-4 font-bold">Welcome to mazzilio!</p>
            <p className="py-1">
              Here, I share glimpses of my daily life and work as a software
              engineer. I'm passionate about promoting accessibility and
              inclusivity in the industry, especially for women and non-binary
              individuals. Through my content, I aim to provide insights into
              the world of tech and highlight the challenges faced by juniors
              and tech-switchers in the industry. I share tips and advice for
              navigating the industry and overcoming barriers, as well as
              showcasing the trends in the tech world.
            </p>
            <p className="py-1">
              I also believe in the importance of work-life balance. I share my
              personal experiences and insights on how to prioritize self-care
              in our busy lives. I hope my content inspires and empowers my
              audience to pursue their passions and make a positive impact in
              their own way.
            </p>
          </div>
        </motion.div>
        <Campaign />
      </motion.div>
    </section>
  );
};

export default CurrentCampaigns;
