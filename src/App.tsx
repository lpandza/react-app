import './App.css';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Router } from './navigation/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { PathConstants } from './navigation/routes/PathConstants.ts';

function App() {
  return (
    <BrowserRouter basename={PathConstants.BASE_URL}>
      <div className="navbar">
        <Navbar />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
