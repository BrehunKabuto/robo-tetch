import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ApplicationsPage } from './pages/ApplicationsPage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { FactsPage } from './pages/FactsPage'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="capabilities" element={<CapabilitiesPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="facts" element={<FactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
