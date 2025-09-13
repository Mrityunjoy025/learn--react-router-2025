import { createRoot } from 'react-dom/client'
import './index.css'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route, Link } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import NotFound from "./pages/notFound.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx"
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

startMirage();

const router = createBrowserRouter(createRoutesFromElements(
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
          <Route path="*" element={<NotFound />} />
      </Route>
))


function App() {
return (
  <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)


