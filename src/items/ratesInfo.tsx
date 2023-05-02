import { RatesType } from "@/types/ratestype";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

// shouldn't just specify an object and instead set an object type instead of just Array<Object>
// best practice to make sure your objects are always typed
export const ratesInfo: Array<RatesType> = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "TikTok / Reels",
    description: `For a single video, my rate is £75. This includes pre-production work, such as 
    brainstorming, planning, and scripting, as well as filming, editing, and delivering the final product. If you're looking for a video bundle, I offer a package deal for 3 videos at a discounted rate of £150. 
  `,
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Long-term Sponsorship",
    description: `For long-term sponsorship, I offer a custom pricing plan that varies based on the scope and duration of the campaign. With this option, we can work 
    together to create a long-term partnership that aligns with your brand's goals and values. Please email me for more details. `,
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Ownership Rights",
    description: `Finally, if you're interested in owning the rights to the TikTok video, I offer an ownership option for £250. 
    This allows you to use the video for any purpose, without any additional licensing fees or restrictions. `,
  },
];
