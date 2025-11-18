import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, DollarSign } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-sm text-green-600 mt-1">↑ {change}</p>
        </div>
      </div>
    </motion.div>
  );
};

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: "总活动数",
      value: "24",
      change: "12%",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "bg-primary-500"
    },
    {
      title: "活跃活动",
      value: "8",
      change: "5%",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "平均转化率",
      value: "3.2%",
      change: "1.2%",
      icon: <Target className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "平均ROI",
      value: "245%",
      change: "18%",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default DashboardStats;