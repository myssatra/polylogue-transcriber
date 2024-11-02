import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </>
    );
}

export default App;
