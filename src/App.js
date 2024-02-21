import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { AuthProvider } from "../src/contexts/AuthContexts"

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<HomePage />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
