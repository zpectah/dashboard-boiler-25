import { useTheme } from '../../hooks';

const ThemeToggle = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <>
      <button onClick={toggleMode}>theme ({mode})</button>
    </>
  );
};

export default ThemeToggle;
