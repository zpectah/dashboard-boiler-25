import { create } from 'zustand';
import { SIDEBAR_STORAGE_KEY } from '../constants';

interface SidebarStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useSidebarStore = create<SidebarStore>((set) => {
  const current = window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';

  const setSidebarHandler = (open: boolean) => {
    set({ open });
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(open));
  };

  return {
    open: current,
    setOpen: setSidebarHandler,
  };
});

export default useSidebarStore;
