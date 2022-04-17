import './App.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/authentication/Login/Login';
import Signup from './pages/authentication/Signup/Signup';
import About from './pages/About/About';
import Checkout from './pages/home/Checkout/Checkout';
import Footer from './pages/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog/Blog';
import RequireAuth from './pages/authentication/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/checkout' element={<RequireAuth>
          <Checkout />
        </RequireAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
