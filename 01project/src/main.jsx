import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Vans/Home.jsx"
import About from "./pages/Vans/About.jsx"
import Vans from "./pages/Vans.jsx"
import VanDetail from "./pages/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import HostLayout  from "./components/HostLayout.jsx"
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetail from "./pages/Host/HostVanDetail.jsx"
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"

import { startMirage } from '../server.js';

if(process.env.NODE_ENV === 'development'){
  startMirage();
}


function App() {
return (
  <BrowserRouter>
   <Routes>
     <Route element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="hostVans" element={<HostVans />} />
          <Route path="reviews" element={<Reviews />} />
          
            <Route path="hostVans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
            </Route>
       </Route> 
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)


