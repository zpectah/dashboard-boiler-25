import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

const AppLayout = () => {
  return (
    <div id="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
