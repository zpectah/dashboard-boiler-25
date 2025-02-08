import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Header />
      <Sidebar />
    </>
  );
};

export default AppLayout;
