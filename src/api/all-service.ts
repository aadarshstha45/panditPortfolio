import { useMutation, useQuery } from "react-query";
import { api } from "./api";
import { PortfolioHttpClient } from "./axiosSetup";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ContactDataType } from "../utils/dataTypes";

const fetchContact = () => {
  return PortfolioHttpClient.get(api.contact);
};
const useFetchContact = () => {
  return useQuery([api.contact], fetchContact, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const fetchHome = () => {
  return PortfolioHttpClient.get(api.home);
};

const useFetchHome = () => {
  return useQuery([api.home], fetchHome, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

const fetchServices = () => {
  return PortfolioHttpClient.get(api.services);
};

const useFetchServices = () => {
  return useQuery([api.services], fetchServices, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

const fetchGallery = () => {
  return PortfolioHttpClient.get(api.gallery);
};

const useFetchGallery = () => {
  return useQuery([api.gallery], fetchGallery, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

const fetchTestimonial = () => {
  return PortfolioHttpClient.get(api.testimonial);
};

const useFetchTestimonial = () => {
  return useQuery([api.testimonial], fetchTestimonial, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

const saveQuestion = (data: ContactDataType) => {
  return PortfolioHttpClient.post(api.question, data);
};
const useSaveQuestion = () => {
  return useMutation(saveQuestion, {
    onSuccess: () => {
      toast.success("Query sent successfully");
    },
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const fetchSocial = () => {
  return PortfolioHttpClient.get(api.social);
};

const useFetchSocial = () => {
  return useQuery([api.social], fetchSocial, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

const fetchAbout = () => {
  return PortfolioHttpClient.get(api.about);
};

const useFetchAbout = () => {
  return useQuery([api.about], fetchAbout, {
    select: (data) => data?.data?.data,
    onError: (error: AxiosError) => {
      console.log(error?.message);
    },
  });
};

export {
  useFetchContact,
  useFetchHome,
  useFetchServices,
  useFetchGallery,
  useFetchTestimonial,
  useFetchSocial,
  useFetchAbout,
  useSaveQuestion,
};
