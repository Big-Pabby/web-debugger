import './App.css';
import { useState } from 'react';
import Connect from './components/connect/connect';
import Loader from './components/Loader/loader';

function App() {
  const [clickedWallet, setClickedWallet] = useState({})
  const [loader, setLoader] = useState(false)

  const data = (wallet) => {
    setClickedWallet(wallet)
    setLoader(true)
  }

  const closeLoader = () => {
    setLoader(false)
  }

  return (
    <div className="App">
      <div className=" container">
        <h2>Web Debugger</h2>
        <div className="connect">
          <Connect data={data}/>
        </div>
      </div>
      <Loader closeLoader={closeLoader} loading={loader} walletData={clickedWallet} />
    </div>
  );
}

export default App;
