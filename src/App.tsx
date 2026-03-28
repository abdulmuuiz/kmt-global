/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalExport from './pages/GlobalExport';
// import DomesticSales from './pages/DomesticSales'; // Japan Sourcing — commented out for now
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="global-export" element={<GlobalExport />} />
          {/* <Route path="domestic-sales" element={<DomesticSales />} /> */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
