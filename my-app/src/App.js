import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/create';

function App() {
  //changed elements to include client side routing
  return (
    <Router>
      <NavigationBar />
      <Routes>
        
        <Route path="/" element={<Content />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
