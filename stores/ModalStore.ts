import { create } from "zustand";

type ModalProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModal = create<ModalProps>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
