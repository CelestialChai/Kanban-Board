import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Board from './pages/Board';
import Login from './pages/Login';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateTicket />} />
            <Route path="/edit" element={<EditTicket />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
      );
}

export default App;
