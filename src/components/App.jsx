import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
//

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Phones from './pages/Phones';
import Register from './pages/Register';

// const Home = lazy(() => import('./pages/Home'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// const Register = lazy(() => './pages/Register');
// const Login = lazy(() => './pages/Login');
// const Phones = lazy(() => './pages/Phones');

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="phones" element={<Phones />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
