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

const Wrapper = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isCentered',
})<{ readonly isCentered?: boolean }>(({ isCentered }) => ({
  width: '100%',
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: isCentered ? 'center' : 'initial',
  justifyContent: isCentered ? 'center' : 'initial',
}));

interface PageLayoutBaseProps extends WithChildren {
  isCentered?: boolean;
  id: string;
  className?: string;
}

const PageLayoutBase = ({ children, isCentered, id, className }: PageLayoutBaseProps) => (
  <OuterWrapper id={`page-layout-base.${id}`} className={className}>
    <InnerWrapper>
      <Wrapper isCentered={isCentered}>{children}</Wrapper>
    </InnerWrapper>
  </OuterWrapper>
);

export default PageLayoutBase;
