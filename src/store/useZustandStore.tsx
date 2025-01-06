import { create } from "zustand";

interface ZustandStore {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const useZustandStore = create<ZustandStore>((set) => ({
  isOpen: false,

  setIsOpen: (value) => set(() => ({ isOpen: value })),
}));

export default useZustandStore;
