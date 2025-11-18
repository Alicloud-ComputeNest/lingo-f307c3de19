import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Image, BarChart3, Zap, Brain, Rocket } from 'lucide-react';

const features = [
  {
    title: "智能文案生成",
    description: "AI驱动的文案创作工具，根据产品特点自动生成吸引人的广告语和营销文案。",
    icon: <PenTool className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-primary-500 to-primary-600"
  },
  {
    title: "创意素材制作",
    description: "一键生成高质量营销素材，包括海报、视频、社交媒体图片等，满足多渠道投放需求。",
    icon: <Image className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-secondary-500 to-secondary-600"
  },
  {
    title: "精准效果预测",
    description: "基于大数据分析和机器学习算法，提前预测营销活动的效果和ROI。",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-accent-500 to-accent-600"
  },
  {
    title: "自动化优化",
    description: "实时监控活动表现，自动调整投放策略以最大化转化效果。",
    icon: <Zap className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-yellow-500 to-orange-500"
  },
  {
    title: "智能受众分析",
    description: "深度分析目标受众画像，识别最有价值的客户群体。",
    icon: <Brain className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-purple-500 to-indigo-600"
  },
  {
    title: "一站式管理",
    description: "统一管理所有营销渠道，轻松协调跨平台活动。",
    icon: <Rocket className="h-8 w-8 text-white" />,
    color: "bg-gradient-to-r from-green-500 to-teal-600"
  }
];

const FeatureSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            全方位智能营销解决方案
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            集文案生成、素材制作、效果预测于一体，助力您的营销活动事半功倍
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;