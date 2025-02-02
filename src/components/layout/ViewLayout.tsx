import { WithChildren, DocumentMeta } from '../../types';
import { useDocumentMeta } from '../../helpers';

interface ViewLayoutProps extends WithChildren {
  variant?: 'default';
  meta?: Partial<DocumentMeta>;
}

const ViewLayout = ({ children, variant = 'default', meta = {} }: ViewLayoutProps) => {
  useDocumentMeta(meta);

  return (
    <main id="view-layout" className={`variant--${variant}`}>
      <div>left column</div>
      <div>{children}</div>
      <div>right column</div>
    </main>
  );
};

export default ViewLayout;
