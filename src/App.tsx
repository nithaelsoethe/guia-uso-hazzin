import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StoreFloatingButton from './components/StoreFloatingButton';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pb-24 sm:pb-28">
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <StoreFloatingButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
