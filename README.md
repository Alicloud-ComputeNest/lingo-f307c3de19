# 智能营销活动管理平台

这是一个现代化的智能营销活动管理平台，集成了文案生成、素材制作、效果预测等功能。平台采用React + TypeScript技术栈，使用Tailwind CSS进行样式设计，具有时尚且富有创意的用户界面。

## 项目结构

```
.
├── index.html                 # HTML入口文件
├── package.json               # 项目依赖和脚本配置
├── postcss.config.js          # PostCSS配置
├── tailwind.config.js         # Tailwind CSS配置
├── tsconfig.json              # TypeScript配置
├── tsconfig.node.json         # Node.js TypeScript配置
├── vite.config.ts             # Vite配置
├── src/
│   ├── index.css              # 全局样式文件
│   ├── main.tsx               # React应用入口
│   ├── App.tsx                # 主应用组件
│   ├── mock.json              # 模拟数据
│   └── components/            # 组件目录
│       ├── Header/            # 头部导航组件
│       │   └── index.tsx
│       ├── DashboardStats/    # 仪表盘统计数据组件
│       │   └── index.tsx
│       ├── CampaignList/      # 活动列表组件
│       │   └── index.tsx
│       ├── FeatureSection/    # 功能特性展示组件
│       │   └── index.tsx
│       └── HeroSection/       # 首页英雄区域组件
│           └── index.tsx
└── README.md                  # 项目说明文档
```

## 功能特性

1. **智能文案生成**: AI驱动的文案创作工具
2. **创意素材制作**: 一键生成高质量营销素材
3. **精准效果预测**: 基于大数据分析的效果预测
4. **自动化优化**: 实时监控和自动调整策略
5. **智能受众分析**: 深度分析目标受众画像
6. **一站式管理**: 统一管理所有营销渠道

## 技术栈

- React 18 with TypeScript
- Vite 构建工具
- Tailwind CSS 样式框架
- Framer Motion 动画库
- Lucide React 图标库
- React Router 路由管理

## 安装和运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

## 设计亮点

1. **渐变色彩主题**: 使用蓝紫粉渐变色系，营造科技感和创意感
2. **流畅动画效果**: 使用Framer Motion实现卡片悬停、元素浮动等交互动画
3. **现代化UI组件**: 卡片式设计、毛玻璃效果、圆角元素等现代设计语言
4. **响应式布局**: 适配不同屏幕尺寸的响应式设计
5. **数据可视化**: 清晰的数据展示和进度条组件

访问 http://localhost:5173 查看应用运行效果。