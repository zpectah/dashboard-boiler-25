import { WithChildren } from '../../types';

interface OverLayoutProps extends WithChildren {
  variant?: 'default';
}

const OverLayout = ({ children, variant = 'default' }: OverLayoutProps) => {
  return (
    <div id="over-layout" className={`variant-${variant}`}>
      {children}
    </div>
  );
};

export default OverLayout;
