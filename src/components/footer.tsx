import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 px-16 py-16">
      <div className="justify-content width-5/6 mx-auto gap-16  md:flex">
        <div className="mt-16 basis-1/5 md:mt-0">
          <img alt="logo" src={Logo} className="h-20" />
          <p className="my-5">Engineer. Creator. Learner.</p>
          <p> © 2023 mazzilio</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            href="https://www.youtube.com/channel/UCigLjF1__VSRe2xUJCDdSIA"
            className="hover:underline"
          >
            <p className="my-5">YouTube</p>
          </a>
          <a
            href="https://www.tiktok.com/@mazzilio"
            className="hover:underline"
          >
            <p className="my-5">TikTok</p>
          </a>
          <a
            href="https://beacons.ai/mazzilio"
            className="my-5 hover:underline"
          >
            <p className="my-5">LinkTree</p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <a
            className="my-5 hover:underline"
            href="mailto:mazziliooo@gmail.com"
          >
            <p className="my-3">mazziliooo@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
