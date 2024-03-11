import { create } from "zustand";

type ServiceState = {
  displayCount: number;
  incrementDisplayCount: () => void;
};

export const useServiceStore = create<ServiceState>((set) => ({
  displayCount: 3,
  incrementDisplayCount: () =>
    set((state) => {
      return { displayCount: state.displayCount + 3 };
    }),
}));

type GalleryState = {
  displayCount: number;
  incrementDisplayCount: () => void;
};

export const useGalleryStore = create<GalleryState>((set) => ({
  displayCount: 3,
  incrementDisplayCount: () =>
    set((state) => {
      return { displayCount: state.displayCount + 3 };
    }),
}));
