import { styled } from '@mui/material';
import { WithChildren } from '../../types';

const OuterWrapper = styled('div')({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
});

const InnerWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
});

interface AppLayoutBaseProps extends WithChildren {
  id: string;
  className?: string;
}

const AppLayoutBase = ({ children, id, className }: AppLayoutBaseProps) => (
  <OuterWrapper id={`app-layout-base.${id}`} className={className}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

export default AppLayoutBase;
