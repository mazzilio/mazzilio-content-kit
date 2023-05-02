import { SelectedPage } from "@/types/navbar";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

// Motion settings

const childMotionContainer = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const RatesCard = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childMotionContainer}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:h-[400px] md:w-[500px]"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 hover:text-secondary-500 hover:underline"
        onClick={() => setSelectedPage(SelectedPage.CurrentCampaigns)}
        href={`#${SelectedPage.ContactMe}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default RatesCard;
