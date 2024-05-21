import { useContext } from 'react';
import { ThemeContext } from '../App';

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>
        The theme is{' '}
        <span
          style={{
            backgroundColor: theme === 'dark' ? 'black' : 'lightblue',
            color: 'white',
          }}
        >
          {theme}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change To {theme === 'light' ? 'dark' : 'light'} Theme
      </button>
    </>
  );
}

export default GrandChildComponent;
