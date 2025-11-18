import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import DashboardStats from './components/DashboardStats';
import CampaignList from './components/CampaignList';
import CampaignDetails from './components/CampaignDetails';
import mockData from './mock.json';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <HeroSection />
              <DashboardStats />
              <CampaignList campaigns={mockData.campaigns} />
              <FeatureSection />
            </main>
          } />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;