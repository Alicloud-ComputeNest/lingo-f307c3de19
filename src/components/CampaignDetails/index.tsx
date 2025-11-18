import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Play, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Edit, 
  BarChart3, 
  Users, 
  Eye, 
  MousePointerClick,
  TrendingUp,
  Target,
  DollarSign
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

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
  audience: string[];
  channels: string[];
}

const mockCampaign: Campaign = {
  id: 1,
  name: "夏季新品发布会",
  status: "active",
  startDate: "2023-06-15",
  endDate: "2023-07-15",
  budget: 50000,
  spent: 32000,
  impressions: 1250000,
  clicks: 45000,
  conversions: 1200,
  roi: 3.2,
  description: "针对年轻消费群体的新品发布活动，重点推广我们的夏季系列产品，通过社交媒体和电商平台进行全方位营销。",
  audience: ["18-25岁", "26-35岁", "女性用户", "科技爱好者"],
  channels: ["社交媒体", "搜索引擎", "电子邮件", "内容营销"]
};

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

const MetricCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
}> = ({ icon, title, value, change, changeType }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center">
        <div className="p-2 bg-primary-100 rounded-lg">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {changeType === 'positive' ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CampaignDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [campaign] = useState<Campaign>(mockCampaign);
  const progress = Math.min(100, (campaign.spent / campaign.budget) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回按钮 */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-primary-600 hover:text-primary-500 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        返回活动列表
      </button>

      {/* 页面标题 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{campaign.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
              {getStatusIcon(campaign.status)}
              <span className="ml-2">{getStatusText(campaign.status)}</span>
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Edit className="h-4 w-4 mr-2" />
            编辑活动
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
            <BarChart3 className="h-4 w-4 mr-2" />
            查看报告
          </button>
        </div>
      </div>

      {/* 活动描述 */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">活动描述</h2>
        <p className="mt-2 text-gray-600">{campaign.description}</p>
      </div>

      {/* 预算进度 */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-900">预算使用情况</h2>
          <span className="text-sm font-medium text-gray-500">
            ¥{campaign.spent.toLocaleString()} / ¥{campaign.budget.toLocaleString()}
          </span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">使用率</span>
            <span className="font-medium">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full" 
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* 数据指标 */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">关键指标</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            icon={<Eye className="h-6 w-6 text-primary-600" />} 
            title="展示量" 
            value={`${(campaign.impressions / 1000).toFixed(1)}K`} 
            change="+12.5%" 
            changeType="positive" 
          />
          <MetricCard 
            icon={<MousePointerClick className="h-6 w-6 text-primary-600" />} 
            title="点击率" 
            value={`${((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%`} 
            change="+3.2%" 
            changeType="positive" 
          />
          <MetricCard 
            icon={<Target className="h-6 w-6 text-primary-600" />} 
            title="转化率" 
            value={`${((campaign.conversions / campaign.clicks) * 100).toFixed(2)}%`} 
            change="-1.1%" 
            changeType="negative" 
          />
          <MetricCard 
            icon={<TrendingUp className="h-6 w-6 text-primary-600" />} 
            title="投资回报率" 
            value={`${campaign.roi}x`} 
            change="+0.8x" 
            changeType="positive" 
          />
        </div>
      </div>

      {/* 受众和渠道 */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">目标受众</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {campaign.audience.map((item, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">投放渠道</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {campaign.channels.map((channel, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;