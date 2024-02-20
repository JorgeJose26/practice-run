import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { AuthProvider } from "../src/contexts/AuthContexts"

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
