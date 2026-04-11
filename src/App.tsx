/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GlobalExport from './pages/GlobalExport';
import JapanSourcing from './pages/JapanSourcing';
import Info from './pages/Info';
import RequestVehicle from './pages/RequestVehicle';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="global-export" element={<GlobalExport />} />
          <Route path="japan-sourcing" element={<JapanSourcing />} />
          <Route path="info" element={<Info />} />
          <Route path="request" element={<RequestVehicle />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
