import './App.css';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Router } from './navigation/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { PathConstants } from './navigation/routes/PathConstants.ts';
import { CharactersContextProvider } from './contexts/CharactersContext.tsx';

function App() {
  return (
    <BrowserRouter basename={PathConstants.BASE_URL}>
      <CharactersContextProvider>
        <div className="navbar">
          <Navbar />
        </div>
        <Router />
      </CharactersContextProvider>
    </BrowserRouter>
  );
}

export default App;
