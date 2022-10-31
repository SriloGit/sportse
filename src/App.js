import './styles/App.css';
import Dashboard from './components/dashboard'
import Header from './components/header'
import NavLeft from './components/navleft'
import { React, /*useEffect, useState*/ } from "react"
//import axios from "axios"
//import { useSearchParams } from "react-router-dom"
import ApiHook from './services/apihook';

function App() {

  const data = ApiHook(18)

  return (
    <div className="App">
      <Header />
      <main>
        <NavLeft />
        <Dashboard userfirstName={data}/>
      </main>
    </div>
  );
}

export default App;
