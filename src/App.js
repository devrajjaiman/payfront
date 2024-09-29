import logo from './paybump-banner.svg';
import './App.css';

import { FilloutStandardEmbed } from '@fillout/react';
import '@fillout/react/style.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className='App-p'>
          Welcome to Paybump!
        </p>
      <div
        style={{
          width: 400,
          height: 700,
        }}
      >
        <FilloutStandardEmbed filloutId="xmj8WHwcAvus" />
      </div>
    {/* </header> */}
    </div>
  );
}

export default App;
