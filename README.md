# 银行开户问题分析系统

这是一个基于 React + Vite + Ant Design 开发的银行开户问题分析系统，用于可视化展示和分析开户过程中的各类问题。

## 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0
- MacOS（推荐）或 Windows

## 安装步骤

1. **安装 Node.js**
   ```bash
   # 使用 Homebrew 安装 Node.js（MacOS）
   brew install node

   # 验证安装
   node -v
   npm -v
   ```

2. **克隆项目**
   ```bash
   git clone [项目地址]
   cd account-opening-analysis
   ```

3. **安装依赖**
   ```bash
   # 安装项目依赖
   npm install

   # 如果遇到依赖冲突，可以尝试
   npm install --legacy-peer-deps
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **构建生产版本**
   ```bash
   npm run build
   ```

## 项目结构

```
account-opening-analysis/
├── src/
│   ├── pages/           # 页面组件
│   │   ├── Dashboard.tsx
│   │   ├── TrendAnalysis.tsx
│   │   ├── CaseManagement.tsx
│   │   └── AIRecommendation.tsx
│   ├── App.tsx         # 应用入口
│   └── main.tsx        # 主入口文件
├── public/             # 静态资源
├── index.html          # HTML 模板
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 主要功能

- 问题分布分析（饼图）
- 趋势分析（折线图）
- 案例管理
- AI 建议

## 技术栈

- React 18
- TypeScript
- Vite
- Ant Design
- @ant-design/charts

## 常见问题

1. **依赖安装失败**
   ```bash
   # 清除 npm 缓存
   npm cache clean --force
   
   # 重新安装依赖
   npm install --legacy-peer-deps
   ```

2. **启动失败**
   - 检查 Node.js 版本是否符合要求
   - 检查端口是否被占用
   - 检查环境变量是否正确

## 开发建议

1. 使用 VS Code 作为开发工具
2. 安装推荐的 VS Code 插件：
   - ESLint
   - Prettier
   - TypeScript Vue Plugin (Volar)

## 联系方式

如有问题，请联系项目维护人员。 