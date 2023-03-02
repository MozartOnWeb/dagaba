import { create } from "zustand";

type HamburgerProps = {
  isOpen: boolean;
  openHamburger: () => void;
  closeHamburger: () => void;
};

export const useHamburgerStore = create<HamburgerProps>((set) => ({
  isOpen: false,
  openHamburger: () => set({ isOpen: true }),
  closeHamburger: () => set({ isOpen: false }),
}));
