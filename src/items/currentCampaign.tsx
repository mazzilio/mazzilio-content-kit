import { CampaignsType } from "@/types/campaignstype";
import codingCarousel from "@/assets/codingCarousel.jpg";
import conference from "@/assets/conference.jpg";
import codingBooks from "@/assets/codingBooks.jpg";
import japan from "@/assets/japan.jpg";
import manchester from "@/assets/manchester.png";
import unitTesting from "@/assets/unitTesting.png";
import CFGEvent from "@/assets/CFGEvent.png";

export const ongoingCampaigns: Array<CampaignsType> = [
  {
    id: 1,
    name: "MIRAI",
    description: `Promoting Japan's Ministry of Foreign Affair's Friendship Exchange Programme. 
    Total Campaign Impressions: 250,000.`,
    image: japan,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7180510616132521221",
  },
  {
    id: 2,
    name: "Life in Manchester",
    description: `Showcasing my favorite cafes, restaurants and activities in Manchester during my days off. 
    Typical impressions is 500-16,000 per post.`,
    image: manchester,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7167121099921149189",
  },
  {
    id: 3,
    name: "Life of a Software Engineer",
    description: `I like to show a realistic insight into my daily life as a Software Engineer. 
    My focus is to show the everyday, mundane aspects and the exciting parts too! 
    I do not talk about or highlight client work but always showcase my personal projects and work instead.
    Typical impressions is 1000-20,000 per post.`,
    image: codingCarousel,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7190873169392110854",
  },
  {
    id: 4,
    name: "Pathways into Tech",
    description: `Focusing on different ways someone can enter the tech industry. I like to focus on my 
    path as an Engineer but will also highlight other technical and 
    non-technical roles too. My current partnership with Code First Girls focuses on pathways into tech through their 
    bootcamp but I always like to highlight other methods for those unable to use Code First Girls.`,
    image: CFGEvent,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7220110471511248133",
  },
  {
    id: 5,
    name: "Digital Skills Building",
    description: `Showcasing the different ways people can learn how to code, build technical understanding and 
    improve on their coding skills through accessible video formats.`,
    image: unitTesting,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7210881742670990597",
  },
  {
    id: 6,
    name: "Technical Content - Comparisons",
    description: `For those further into their tech journeys, I break down documentation and technical frameworks 
    to compare and showcase the benefits and/or cons for development considerations.`,
    image: conference,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7221233209894243589",
  },
  {
    id: 7,
    name: "Technical Resources",
    description: `Showing my favorite resources, repositories and information for those needing inspiration 
    or help with their technical skills and development processes.`,
    image: codingBooks,
    campaignLink: "https://www.tiktok.com/@mazzilio/video/7207842003181210886",
  },
];
