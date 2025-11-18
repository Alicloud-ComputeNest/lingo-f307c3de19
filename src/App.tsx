import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import CampaignList from './components/CampaignList';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import mockData from './mock.json';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* 仪表盘页面 */}
            <Routes>
              <Route path="/" element={
                <>
                  <DashboardStats />
                  <CampaignList campaigns={mockData.campaigns} />
                </>
              } />
              
              {/* 首页/营销页面 */}
              <Route path="/marketing" element={
                <div className="max-w-7xl mx-auto">
                  <HeroSection />
                  <FeatureSection />
                </div>
              } />
            </Routes>
            
            {/* 如果不在路由中，显示首页内容 */}
            {!window.location.pathname.includes('/marketing') && window.location.pathname !== '/' && (
              <div className="max-w-7xl mx-auto">
                <HeroSection />
                <FeatureSection />
              </div>
            )}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;