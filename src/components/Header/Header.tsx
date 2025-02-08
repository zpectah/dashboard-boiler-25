import { styled, Container } from '@mui/material';
import { useSidebar } from '../../hooks';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../../constants';
import { ThemeToggle } from '../ThemeToggle';
import { LocalesToggle } from '../LocalesToggle';
import { SidebarToggle } from '../SidebarToggle';

const HeaderWrapper = styled('header', {
  shouldForwardProp: (propName) => propName !== 'isSidebarOpen',
})<{ readonly isSidebarOpen: boolean }>(({ theme, isSidebarOpen }) => ({
  width: isSidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%',
  left: isSidebarOpen ? SIDEBAR_WIDTH : 0,
  top: 0,
  height: HEADER_HEIGHT,
  position: 'fixed',
  transition: theme.transitions.create(['left', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InnerWrapper = styled('div')({});

const Header = () => {
  const { open } = useSidebar();

  return (
    <HeaderWrapper isSidebarOpen={open}>
      <Container maxWidth={false}>
        <InnerWrapper>
          header
          <ThemeToggle />
          <LocalesToggle />
          <SidebarToggle />
        </InnerWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
