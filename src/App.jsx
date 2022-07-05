import './App.css';
import { useState } from 'react';
import Connect from './components/connect/connect';
import loader from './components/Loader/loader';

function App() {
  const [clickedWallet, setClickedWallet] = useState({})

  const data = (wallet) => {
    setClickedWallet(wallet)
    console.log(clickedWallet)
  }

  return (
    <div className="App">
      <div className=" container">
        <h2>Web Debugger</h2>
        <div className="connect">
          <Connect data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
