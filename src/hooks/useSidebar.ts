import { useSidebarStore } from '../store';

export const useSidebar = () => {
  const { open, setOpen } = useSidebarStore();

  const toggleHandler = () => setOpen(!open);

  return {
    open,
    onToggle: toggleHandler,
  };
};
