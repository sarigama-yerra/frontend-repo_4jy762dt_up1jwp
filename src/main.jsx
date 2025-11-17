import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import RoadmapPage from './pages/RoadmapPage'
import FAQPage from './pages/FAQPage'
import StatusPage from './pages/StatusPage'
import LegalPage from './pages/LegalPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/legal/terms" element={<LegalPage type="terms" />} />
        <Route path="/legal/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/legal/cookies" element={<LegalPage type="cookies" />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
