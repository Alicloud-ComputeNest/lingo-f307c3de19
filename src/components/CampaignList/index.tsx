import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Play, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  status: 'active' | 'planned' | 'completed';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
  description: string;
  platform: string;
  targetAudience: string;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Play className="h-4 w-4 text-green-500" />;
    case 'planned':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-blue-500" />;
    default:
      return <XCircle className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return '进行中';
    case 'planned':
      return '计划中';
    case 'completed':
      return '已完成';
    default:
      return '未知';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'planned':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CampaignItem: React.FC<{ 
  campaign: Campaign; 
  onClick: (campaign: Campaign) => void 
}> = ({ campaign, onClick }) => {
  const progress = Math.min(100, (campaign.spent / campaign.budget) * 100);
  
  return (
    <motion.div 
      className="feature-card bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(campaign)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
          <div className="mt-2 flex items-center">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
              {getStatusIcon(campaign.status)}
              <span className="ml-1">{getStatusText(campaign.status)}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(campaign.startDate).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">预算</p>
          <p className="text-lg font-semibold">¥{campaign.budget.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">花费</p>
          <p className="text-lg font-semibold">¥{campaign.spent.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">预算使用率</span>
          <span className="font-medium">{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">展示量</p>
          <p className="font-semibold">{(campaign.impressions / 1000).toFixed(1)}K</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">点击率</p>
          <p className="font-semibold">{((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">ROI</p>
          <p className="font-semibold">{campaign.roi}x</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
          onClick={(e) => {
            e.stopPropagation();
            onClick(campaign);
          }}
        >
          <Eye className="h-4 w-4 mr-1" />
          查看详情
        </button>
      </div>
    </motion.div>
  );
};

const CampaignModal: React.FC<{ 
  campaign: Campaign | null; 
  onClose: () => void 
}> = ({ campaign, onClose }) => {
  if (!campaign) return null;

  const progress = Math.min(100, (campaign.spent / campaign.budget) * 100);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div 
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{campaign.name}</h2>
              <div className="mt-2 flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                  {getStatusIcon(campaign.status)}
                  <span className="ml-1">{getStatusText(campaign.status)}</span>
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <p className="mt-4 text-gray-600">{campaign.description}</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">基本信息</h3>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">平台</span>
                  <span className="font-medium">{campaign.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">目标受众</span>
                  <span className="font-medium">{campaign.targetAudience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">开始日期</span>
                  <span className="font-medium">{new Date(campaign.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">结束日期</span>
                  <span className="font-medium">{new Date(campaign.endDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">预算与支出</h3>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">总预算</span>
                  <span className="font-medium">¥{campaign.budget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">已花费</span>
                  <span className="font-medium">¥{campaign.spent.toLocaleString()}</span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">预算使用率</span>
                    <span className="font-medium">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">性能指标</h3>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{(campaign.impressions / 1000).toFixed(1)}K</p>
                <p className="text-sm text-gray-500">展示量</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{campaign.clicks}</p>
                <p className="text-sm text-gray-500">点击数</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{campaign.conversions}</p>
                <p className="text-sm text-gray-500">转化数</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">{campaign.roi}x</p>
                <p className="text-sm text-gray-500">投资回报率</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCampaignClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">营销活动</h2>
          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
            查看全部
          </button>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignItem 
              key={campaign.id} 
              campaign={campaign} 
              onClick={handleCampaignClick} 
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <CampaignModal 
          campaign={selectedCampaign} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default CampaignList;