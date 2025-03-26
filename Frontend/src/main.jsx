import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layouts/root.layout'
import HomePage from './Pages/home.page'
import ShipmentMgt from './Pages/shipments.page'
import AddShipment from './Pages/addshipment.page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shipments" element={<ShipmentMgt />} />
          <Route path="/shipments/add" element={<AddShipment/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
