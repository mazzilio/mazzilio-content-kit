import HeaderText from "@/components/HeaderText";
import { SelectedPage } from "@/types/navbar";
import { motion } from "framer-motion";
import { contentSkills } from "@/items/skillsItems";
import { SkillsType } from "@/types/skillsType";
import AboutMeCard from "@/components/cards/AboutMeCard";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const aboutMeOverlay = `p-4 absolute z-30 items-center flex
whitespace-normal bg-primary-500 text-center text-white overflow-hidden
opacity-0 transition duration-500 hover:opacity-100  text-sm
h-[150px] w-[200px]  justify-center rounded-full bg-primary-100`;

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutme" className="w-full bg-gray-20 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        <motion.div
          className="mx-auto w-5/6 flex-col md:flex md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 1 },
          }}
        >
          <div className="py-10 md:w-3/5">
            <HeaderText>About Me</HeaderText>
            <p className="py-5">
              Alongside my software engineering capability, I have extensive
              experience curating social media posts, branding and extensive
              social media planning from past positions. Take a look at some of
              the areas I have expertise in:
            </p>
            <div className="flew-row mt-2 flex flex-wrap justify-center gap-10">
              {contentSkills.map((skill: SkillsType) => (
                <div
                  className="flex h-[150px] w-[200px] items-center justify-center rounded-full bg-primary-100"
                  key={skill.id}
                >
                  <div className={aboutMeOverlay}> {skill.skillInfo}</div>
                  {skill.skillName}
                </div>
              ))}
            </div>
          </div>
          <AboutMeCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
