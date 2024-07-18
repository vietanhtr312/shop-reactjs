import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from "./pages/Category";
import Cart from './pages/Cart';
import { CompactHeader, DefaultLayout } from './layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/category" element={<DefaultLayout><Category /></DefaultLayout>} />
          <Route path="/cart" element={<CompactHeader><Cart /></CompactHeader>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
