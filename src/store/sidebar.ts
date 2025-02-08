import { create } from 'zustand';

interface SidebarStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useSidebarStore = create<SidebarStore>((set) => {
  const current = window.localStorage.getItem('APP_SIDEBAR') === 'true';

  const setSidebarHandler = (open: boolean) => {
    set({ open });
    window.localStorage.setItem('APP_SIDEBAR', String(open));
  };

  return {
    open: current,
    setOpen: setSidebarHandler,
  };
});

export default useSidebarStore;
