import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState();
  console.log(sessionToken);

  return (
    <div className="App">
      <Navbar setSession={sessionToken}/>
      {sessionToken}
      <Auth />
    </div>
  );
}

export default App;
