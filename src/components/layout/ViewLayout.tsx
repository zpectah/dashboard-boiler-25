import { ReactNode } from 'react';
import { styled, Container } from '@mui/material';
import { WithChildren, DocumentMeta } from '../../types';
import { useDocumentMeta } from '../../helpers';
import { useSidebar } from '../../hooks';
import { CONTENT_SIDEBAR_WIDTH, HEADER_HEIGHT, SIDEBAR_WIDTH } from '../../constants';
import { Footer } from '../Footer';

const OuterWrapper = styled('main')({
  flex: 1,
});

const MiddleWrapper = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isSidebarOpen',
})<{ readonly isSidebarOpen: boolean }>(({ theme, isSidebarOpen }) => ({
  width: isSidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%',
  left: isSidebarOpen ? SIDEBAR_WIDTH : 0,
  position: 'relative',
  transition: theme.transitions.create(['left', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const InnerWrapper = styled('div')({
  paddingTop: HEADER_HEIGHT,
  display: 'flex',
  flexDirection: 'row',
});

const ContentWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ContentSidebarWrapper = styled('aside')(({ theme }) => ({
  width: CONTENT_SIDEBAR_WIDTH,
  marginLeft: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

interface ViewLayoutProps extends WithChildren {
  variant?: 'default';
  meta?: Partial<DocumentMeta>;
  side?: ReactNode;
}

const ViewLayout = ({ children, variant = 'default', meta = {}, side }: ViewLayoutProps) => {
  const { open } = useSidebar();

  useDocumentMeta(meta);

  return (
    <OuterWrapper id="view-layout" className={`variant--${variant}`}>
      <MiddleWrapper isSidebarOpen={open}>
        <Container maxWidth={false}>
          <InnerWrapper>
            <ContentWrapper>{children}</ContentWrapper>
            {side && <ContentSidebarWrapper>{side}</ContentSidebarWrapper>}
          </InnerWrapper>
          <Footer />
        </Container>
      </MiddleWrapper>
    </OuterWrapper>
  );
};

export default ViewLayout;
