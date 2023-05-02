import HeaderText from "@/components/HeaderText";
import { SelectedPage } from "@/types/navbar";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import KeyBoardTyping from "@/assets/KeyboardTyping.png";
// https://react-hook-form.com/get-started
type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  // Form stylings
  const inputStyling = `placeholder-white w-full rounded-lg bg-primary-300 px-5 py-3 mb-5`;
  // trigger allows you to validate your form if needed
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // rare case of using any for e value (event) as we're not exactly sure what type the event will be
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      // Stop it from refreshing it / go to a new page onSubmit
      e.preventDefault();
    }
  };
  return (
    <section id="contactme" className="mx-auto w-5/6 pb-32 pt-24 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">INTERESTED?</span> Let's Talk.
          </HeaderText>
          <p className="my-5">
            Whether you're looking for more information, consulting services, or
            would like to inquire about commissioning a custom video, I'm here
            to help. You can contact me via email or by filling out the enquiry
            form on my website. My email is always open, and I strive to respond
            to all inquiries as quickly as possible.
          </p>
        </motion.div>

        {/* Form handling w/ image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
          >
            {/* Create form endpoint using FormSubmit
            https://formsubmit.co/documentation */}
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/6059d5f17eb9a41dd754d0a2c72743f8"
            >
              <input
                className={inputStyling}
                type="text"
                placeholder="Name"
                // React hook form does the work with the following
                {...register("name", { required: true, maxLength: 100 })}
              />
              {/* allows you to do error conditionals for it all too using react form hooks */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <input
                className={inputStyling}
                type="text"
                placeholder="Email"
                // regex pattern for email
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyling}
                rows={4}
                cols={50}
                placeholder="Your message"
                // React hook form does the work with the following
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {/* allows you to do error conditionals for it all too using react form hooks */}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Send
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 1 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full">
              <div className="w-100 absolute left-[100px] top-[230px] z-[1] opacity-70 md:content-logo" />

              <img
                alt="image"
                src={KeyBoardTyping}
                className="h-[150px] w-[1000px] rounded object-cover md:ml-9 md:h-[260px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
