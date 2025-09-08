import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SidebarState {
  isOpen: boolean;
}

interface SidebarActions {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarState & SidebarActions>()(
  devtools((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  }))
);
