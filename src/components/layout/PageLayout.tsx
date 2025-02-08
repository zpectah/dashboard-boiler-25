import { Container } from '@mui/material';
import { WithChildren } from '../../types';
import PageLayoutBase from './PageLayoutBase';

interface OverLayoutProps extends WithChildren {
  variant?: 'default' | 'centered';
}

const PageLayout = ({ children, variant = 'default' }: OverLayoutProps) => {
  return (
    <PageLayoutBase id="page-layout" className={`variant--${variant}`} isCentered={variant === 'centered'}>
      <Container maxWidth="md">{children}</Container>
    </PageLayoutBase>
  );
};

export default PageLayout;
