import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ThemeContext from './ThemeContext';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(false);
  let body = document.querySelector('body');

  const switchTheme = () => {
    body.classList.toggle('dark-theme');
    if(currentTheme === false) {
      setCurrentTheme(true)
    } else {
      setCurrentTheme(false)
    }
  };

  return (
    <ThemeContext.Provider value={{
        currentTheme,
        switchTheme
      }}>
      <Header />
      <SubHeader />
      <Works />
      <Contact />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
