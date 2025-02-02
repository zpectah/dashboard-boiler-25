import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import { LocalesToggle } from '../LocalesToggle';

const AppLayout = () => {
  return (
    <div id="app-layout">
      <header>
        header
        <ThemeToggle />
        <LocalesToggle />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
