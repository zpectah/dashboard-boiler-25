import { styled, Container, Paper, Stack, StackProps } from '@mui/material';
import { useSidebar } from '../../hooks';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../../constants';
import { ThemeToggle } from '../ThemeToggle';
import { LocalesToggle } from '../LocalesToggle';
import { SidebarToggle } from '../SidebarToggle';
import { AppLogo } from '../AppLogo';

const HeaderWrapper = styled(Paper, {
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
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Header = () => {
  const { open } = useSidebar();

  const stackBlocCommonProps: Partial<StackProps> = {
    direction: 'row',
    alignItems: 'center',
    gap: 2,
  };

  const primary = !open ? (
    <>
      <SidebarToggle />
      <AppLogo />
    </>
  ) : (
    <></>
  );
  const secondary = (
    <>
      <ThemeToggle />
      <LocalesToggle />
    </>
  );
  const tertiary = <></>;

  return (
    <HeaderWrapper as="header" isSidebarOpen={open}>
      <Container maxWidth={false}>
        <Stack direction="row" gap={3} justifyContent="space-between">
          <Stack {...stackBlocCommonProps}>{primary}</Stack>
          <Stack {...stackBlocCommonProps}>{tertiary}</Stack>
          <Stack {...stackBlocCommonProps}>{secondary}</Stack>
        </Stack>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
