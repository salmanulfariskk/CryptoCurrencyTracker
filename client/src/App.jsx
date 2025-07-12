import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import CoinDetail from './pages/CoinDetail.jsx'
import LandingHero from './components/LandingHero'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingHero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:coinId" element={<CoinDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
