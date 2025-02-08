import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuList, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';
import config from '../../config';

const Navbar = () => {
  const { t } = useTranslation();

  const {
    routes: { routes, root },
  } = config;

  const menuItems = [
    {
      label: t('routes.dashboard'),
      path: routes.dashboard.path,
      icon: HomeIcon,
    },
    {
      label: t('routes.articles'),
      path: routes.articles.path,
      icon: ArticleIcon,
    },
    {
      label: t('routes.payments'),
      path: routes.payments.path,
      icon: PaymentsIcon,
    },
    {
      label: t('routes.users'),
      path: routes.users.path,
      icon: PeopleIcon,
    },

    // DEMO
    {
      label: t('routes.welcome'),
      path: root,
      icon: QuestionMarkIcon,
      sub: 'demo',
    },
    {
      label: t('routes.login'),
      path: routes.login.path,
      icon: QuestionMarkIcon,
      sub: 'demo',
    },
    {
      label: t('routes.passwordRecovery'),
      path: routes.password_recovery.path,
      icon: QuestionMarkIcon,
      sub: 'demo',
    },
    {
      label: t('routes.registration'),
      path: routes.registration.path,
      icon: QuestionMarkIcon,
      sub: 'demo',
    },
  ].map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return (
    <MenuList disablePadding>
      {menuItems.map(({ id, label, path, icon: Icon, sub }) => (
        <MenuItem
          key={id}
          divider
          sx={{
            paddingTop: ({ spacing }) => spacing(1.5),
            paddingBottom: ({ spacing }) => spacing(1.5),
          }}
          component={Link}
          to={path}
        >
          {Icon && (
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
          )}
          <ListItemText>{label}</ListItemText>
          {sub && <Typography variant="caption">{sub}</Typography>}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Navbar;
