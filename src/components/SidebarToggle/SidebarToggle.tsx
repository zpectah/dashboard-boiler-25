import { useSidebar } from '../../hooks';

const SidebarToggle = () => {
  const { onToggle } = useSidebar();

  return <button onClick={onToggle}>menu</button>;
};

export default SidebarToggle;
