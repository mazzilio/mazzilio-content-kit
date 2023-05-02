import HeaderText from "@/components/HeaderText";
import ActionButton from "@/components/actionbutton";
import RatesCard from "@/components/cards/RatesCard";
import { ratesInfo } from "@/items/ratesInfo";
import { SelectedPage } from "@/types/navbar";
import { motion } from "framer-motion";
import MHPresenting from "@/assets/MHPresenting.jpeg";

type Props = { setSelectedPage: (value: SelectedPage) => void };

// Motion settings for each card
const motionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

function Rates({ setSelectedPage }: Props) {
  return (
    <section id="rates" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Rates)}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HeaderText>Rates</HeaderText>
          <p className="my-5 text-sm">
            As a freelance content creator, I offer commission services for
            custom videos. My commission rates vary depending on the scope and
            complexity of the project. If you're interested in commissioning a
            custom TikTok video, please don't hesitate to contact me via email.
          </p>
        </motion.div>

        {/* rates card and outlines */}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={motionContainer}
        >
          {ratesInfo.map((rate) => (
            <RatesCard
              key={rate.id}
              icon={rate.icon}
              title={rate.title}
              description={rate.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={MHPresenting}
            alt="rates info pic"
            className="mx-auto h-[300px] rounded object-cover shadow"
          />

          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 1 },
                  }}
                  className="md:my-5 md:w-3/5"
                >
                  <HeaderText>
                    Need some {""}
                    <span className="text-primary-500">ideas? </span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>
            {/* Decsription */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 1 },
              }}
            >
              <p className="my-5">
                I'm open to discussing your project in detail and providing a
                personalized quote based on your needs and budget. My commission
                rates are competitive and fair, and I strive to provide
                high-quality content that exceeds your expectations. I have
                experience working with a variety of clients. Whether you're
                looking for a promotional video for your brand, a fun and
                engaging challenge, or anything in between, I'm here to bring
                your ideas to life.
              </p>
              <p className="mb-5">
                I can provide you with personalized feedback and advice on
                everything from video production and editing techniques to
                creative direction and brand strategy. My goal is to help you
                create content that not only resonates with your audience but
                also reflects your unique vision and voice.
              </p>
            </motion.div>
            {/* Button CTA */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Rates;
