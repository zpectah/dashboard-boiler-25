import { styled, Drawer, Box, Paper, Stack } from '@mui/material';
import { useSidebar } from '../../hooks';
import { HEADER_HEIGHT } from '../../constants';
import { SidebarToggle } from '../SidebarToggle';
import { AppLogo } from '../AppLogo';
import { Navbar } from '../Navbar';

const SidebarWrapper = styled(Box)({
  width: '250px',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const SidebarHeader = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

const SidebarContent = styled('div')({
  width: 'calc(100% + 30px)',
  height: '100%',
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
});

const SidebarScrollableContent = styled('div')({
  width: 'calc(100% - 30px)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const SidebarBlock = styled('div')({
  flex: 1,
});

const SidebarAddon = styled('div')({});

const Sidebar = () => {
  const { open } = useSidebar();

  const header = (
    <Stack direction="row" alignItems="center" gap={2}>
      <SidebarToggle />
      <AppLogo />
    </Stack>
  );
  const content = <Navbar />;
  const addon = <>...addon...</>;

  return (
    <Drawer open={open} variant="persistent" anchor="left">
      <SidebarWrapper>
        <SidebarHeader>{header}</SidebarHeader>
        <SidebarContent>
          <SidebarScrollableContent>
            <SidebarBlock>{content}</SidebarBlock>
            <SidebarAddon>{addon}</SidebarAddon>
          </SidebarScrollableContent>
        </SidebarContent>
      </SidebarWrapper>
    </Drawer>
  );
};

export default Sidebar;
