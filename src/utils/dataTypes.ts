/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors } from "react-hook-form";

export type ContactDataType = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export type InfoDataType = {
  title: string;
  slug: string;
  body: string;
};

export type SocialDataType = {
  id: string;
  title: string;
  link: string;
  slug: string;
};

export type AboutDataType = {
  id: string;
  description: string;
  image: string;
};

export type InputFieldProps = {
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  control: Control<any>;
  variant?: string;
  type: string;
  errors?: FieldErrors<ContactDataType> | undefined;
};

export type ServiceDataType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type GalleryDataType = {
  id: string;
  image: string;
};

export type TestimonialDataType = {
  id: string;
  name: string;
  message: string;
  image: string;
};

export type HomeDataType = {
  slug: string;
  heading: string;
  image: string;
};
