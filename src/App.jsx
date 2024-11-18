import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/NavBar';
import ToDo from './assets/ToDo';
import Main from './assets/Main';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/about" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
