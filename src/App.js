import './styles/App.css';
import Profil from './page/profil'
import Error from './page/error'
import Header from './components/header/header'
import { React } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate replace to='/user/12' />} />
          <Route path='/user/:id' element={<Profil />} />
          <Route path='/user/:id/activity' element={<Profil />} />
          <Route path='/user/:id/average-sessions' element={<Profil />} />
          <Route path='/user/:id/performance' element={<Profil />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
