import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useSidebar } from '../../hooks';

const SidebarToggle = () => {
  const { t } = useTranslation();
  const { open, onToggle } = useSidebar();

  const icon = open ? <MenuOpenIcon /> : <MenuIcon />;

  return (
    <Tooltip title={t('button.menu')}>
      <IconButton onClick={onToggle}>{icon}</IconButton>
    </Tooltip>
  );
};

export default SidebarToggle;
