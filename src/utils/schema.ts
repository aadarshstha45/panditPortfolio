import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  phone: yup
    .number()
    .typeError("Phone number should be a number")
    .required("Phone is required"),
});
