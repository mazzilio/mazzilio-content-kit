import { useForm } from "react-hook-form";

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

export default onSubmit;
