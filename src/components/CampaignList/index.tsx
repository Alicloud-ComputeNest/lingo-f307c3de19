import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Play, Clock, CheckCircle, XCircle } from 'lucide-react';

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

const CampaignItem: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const progress = Math.min(100, (campaign.spent / campaign.budget) * 100);
  
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
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
    </motion.div>
  );
};

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">营销活动</h2>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
          查看全部
        </button>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;