import React from 'react';
import { TrendingUp, DollarSign, Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, color }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p className="text-sm text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {change}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DashboardStats = () => {
  const stats = [
    {
      title: "总活动数",
      value: "24",
      icon: <Target className="h-6 w-6 text-white" />,
      change: "+12%",
      color: "bg-gradient-to-r from-primary-500 to-primary-600"
    },
    {
      title: "活跃活动",
      value: "8",
      icon: <Eye className="h-6 w-6 text-white" />,
      change: "+5%",
      color: "bg-gradient-to-r from-secondary-500 to-secondary-600"
    },
    {
      title: "转化率",
      value: "3.2%",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      change: "+1.2%",
      color: "bg-gradient-to-r from-accent-500 to-accent-600"
    },
    {
      title: "平均ROI",
      value: "245%",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      change: "+8%",
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default DashboardStats;