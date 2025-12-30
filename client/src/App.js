import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import CategoryPage from './components/CategoryPage';
import AdminDashboard from './components/AdminDashboard';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/:categoryName/:subCategoryName" element={<CategoryPage />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
