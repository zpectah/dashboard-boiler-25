import { styled, Drawer, Box } from '@mui/material';
import { useSidebar } from '../../hooks';
import { HEADER_HEIGHT } from '../../constants';

const SidebarWrapper = styled(Box)({
  width: '250px',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const SidebarHeader = styled('div')({
  width: '100%',
  height: HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

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

  const header = <>...header...</>;
  const content = <>...content...</>;
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
