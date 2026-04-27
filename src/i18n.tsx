import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "zh" | "en";

const translations = {
  // Nav
  "nav.home": { zh: "首页", en: "Home" },
  "nav.about": { zh: "关于我们", en: "About" },
  "nav.services": { zh: "服务", en: "Services" },
  "nav.services.investment": { zh: "资本与孵化", en: "Capital & Incubation" },
  "nav.services.agentGlobal": { zh: "AI Agent 出海", en: "AI Agent Global" },
  "nav.services.consulting": { zh: "AI 咨询落地", en: "AI Consulting" },
  "nav.knowledge": { zh: "知识星球", en: "Knowledge Hub" },
  "nav.events": { zh: "活动", en: "Events" },
  "nav.getStarted": { zh: "开始合作", en: "GET STARTED" },

  // Hero
  "hero.badge": { zh: "AI 产业化全周期服务", en: "Full-Cycle AI Industrialization" },
  "hero.heading1": { zh: "拨开迷雾，洞察AI", en: "CUT THROUGH THE MIST" },
  "hero.heading2": { zh: "让智能为你所用", en: "MAKE AI WORK FOR YOU" },
  "hero.desc": {
    zh: "MIST Ai 专注于 AI 产业化的全周期增长与资本服务。链接技术创业者、产业资本与行业场景，构建从 0 到 N 的产业闭环。",
    en: "MIST Ai focuses on full-cycle growth and capital services for AI industrialization. Connecting tech entrepreneurs, industry capital, and business scenarios to build a complete industrial loop from 0 to N.",
  },
  "hero.startProject": { zh: "开始合作", en: "LET'S COLLABORATE" },
  "hero.ourPortfolio": { zh: "了解我们", en: "ABOUT US" },

  // Home previews
  "home.about.badge": { zh: "关于我们", en: "About Us" },
  "home.about.cta": { zh: "了解更多", en: "LEARN MORE" },
  "home.about.mission": { zh: "使命", en: "Mission" },
  "home.about.mission.desc": {
    zh: "以 AI 技术驱动产业升级，帮助企业实现从 0 到 1 的智能化跨越，让 AI 真正服务于实体经济。",
    en: "Drive industrial transformation through AI, helping enterprises achieve intelligent breakthroughs from 0 to 1, making AI truly serve the real economy.",
  },
  "home.about.vision": { zh: "愿景", en: "Vision" },
  "home.about.vision.desc": {
    zh: "成为全球领先的 AI 产业化全周期服务平台，连接技术、资本与产业，构建繁荣的 AI 创新生态。",
    en: "Become the world's leading full-lifecycle AI industrialization platform, connecting technology, capital, and industry to build a thriving AI innovation ecosystem.",
  },
  "home.about.values": { zh: "价值观", en: "Values" },
  "home.about.values.desc": {
    zh: "务实创新、开放协作、长期主义。我们相信技术的价值在于落地，合作的力量大于竞争。",
    en: "Pragmatic innovation, open collaboration, long-term thinking. We believe technology's value lies in real-world application, and collaboration outweighs competition.",
  },
  "home.services.badge": { zh: "我们的服务", en: "Our Services" },
  "home.services.heading": { zh: "我们的服务", en: "Our Services" },
  "home.investment.highlight": {
    zh: "聚焦早期 AI 项目投资，成功孵化 SpatialWolk、瞰影科技等前沿项目。",
    en: "Focused on early-stage AI investment, having incubated cutting-edge projects like SpatialWolk and KanYing Tech.",
  },
  "home.agentGlobal.highlight": {
    zh: "操盘千万美金级 AI Agent 出海项目，纯靠 KOC + UGC 实现指数级增长。",
    en: "Managed $10M+ AI Agent global expansion projects, achieving exponential growth purely through KOC + UGC.",
  },
  "home.consulting.highlight": {
    zh: "从 AI/ML 战略咨询到 MVP 开发，端到端的 AI 技术落地赋能。",
    en: "From AI/ML strategic consulting to MVP development, end-to-end AI technology implementation.",
  },
  "home.viewDetails": { zh: "查看详情", en: "VIEW DETAILS" },

  // Services
  "services.eyebrow": { zh: "我们的服务", en: "What we do" },
  "services.heading": { zh: "核心服务", en: "CORE SERVICES" },
  "services.desc": {
    zh: "全方位的 AI 产业化赋能体系，助力技术跨越商业鸿沟。",
    en: "A comprehensive AI industrialization empowerment system, helping technology cross the commercial chasm.",
  },
  "services.explore": { zh: "了解更多", en: "EXPLORE" },
  "services.learnMore": { zh: "了解详情", en: "LEARN MORE" },

  // Investment & Financing
  "investment.badge": { zh: "投融资服务", en: "Investment & Financing" },
  "investment.heading1": { zh: "资本驱动", en: "CAPITAL-DRIVEN" },
  "investment.heading2": { zh: "产业跃迁", en: "GROWTH" },
  "investment.desc": {
    zh: "从天使轮到成长期，MIST Ai 提供全周期资本支持与深度孵化服务，精准链接产业资本与技术创业者，助力完成关键跃迁。",
    en: "From angel round to growth stage, MIST Ai provides full-cycle capital support and deep incubation services, precisely connecting industry capital with tech entrepreneurs.",
  },
  "investment.card1.title": { zh: "早期投资", en: "Early-Stage Investment" },
  "investment.card1.desc": {
    zh: "聚焦 AI 赛道的种子轮与天使轮投资，以资本为纽带助力技术团队完成从 0 到 1。",
    en: "Seed and angel round investments in AI, helping tech teams go from 0 to 1 with capital as the bridge.",
  },
  "investment.card2.title": { zh: "深度孵化", en: "Deep Incubation" },
  "investment.card2.desc": {
    zh: "不止于资金，提供技术架构、商业模式、市场策略的全栈孵化支持。",
    en: "Beyond funding — full-stack incubation support in tech architecture, business models, and go-to-market strategies.",
  },
  "investment.card3.title": { zh: "战略融资", en: "Strategic Financing" },
  "investment.card3.desc": {
    zh: "为成长期项目精准匹配产业资本与战略投资者，加速规模化进程。",
    en: "Precisely matching growth-stage projects with industry capital and strategic investors to accelerate scaling.",
  },
  "investment.card4.title": { zh: "资源链接", en: "Resource Networking" },
  "investment.card4.desc": {
    zh: "深度链接政府、产业基金、头部企业，构建多维度的产业资源网络。",
    en: "Deep connections with governments, industry funds, and leading enterprises to build a multi-dimensional resource network.",
  },

  // AI Agent Global
  "agentGlobal.badge": { zh: "AI Agent 出海", en: "AI Agent Global" },
  "agentGlobal.heading1": { zh: "只做 AI Agent 的", en: "AI AGENT" },
  "agentGlobal.heading2": { zh: "0→1 增长", en: "0→1 GROWTH" },
  "agentGlobal.desc": {
    zh: "迷雾智能 MIST Ai 提供覆盖 AI 产品全生命周期的核心营销服务，从品牌曝光到精准转化，构建完整的增长飞轮。",
    en: "MIST Ai provides core marketing services covering the full lifecycle of AI products, from brand exposure to precise conversion, building a complete growth flywheel.",
  },

  // Featured KOC Solution
  "agentGlobal.koc.badge": { zh: "首推方案 · 全新上线", en: "Featured Solution · New" },
  "agentGlobal.koc.title": { zh: "全球化 AI Agent KOC 增长解决方案", en: "Global AI Agent KOC Growth Solution" },
  "agentGlobal.koc.desc": {
    zh: "我们操盘了千万美金级融资的教育类 AI Agent 出海项目，在 0 投流 / 0 SEO / 0 GEO 的「三零」条件下，纯靠 KOC + UGC 实现指数级增长。",
    en: "We managed a $10M+ funded edu-AI Agent expansion project, achieving exponential growth purely through KOC + UGC under zero paid ads / zero SEO / zero GEO conditions.",
  },
  "agentGlobal.koc.point1": {
    zh: "60 条深度创意搜索 + 定制化内容 Brief",
    en: "60 deep creative searches + customized content briefs",
  },
  "agentGlobal.koc.point2": {
    zh: "6 个真人出镜账号，从 0 到 1 搭建激活",
    en: "6 real-person accounts, built and activated from 0 to 1",
  },
  "agentGlobal.koc.point3": {
    zh: "10 天完成策略到上线全流程 · 账号资产 100% 归你",
    en: "10 days from strategy to launch · 100% account ownership",
  },
  "agentGlobal.koc.cta": { zh: "查看完整方案", en: "VIEW FULL PLAN" },
  "agentGlobal.koc.price": { zh: "$1,200 / 周期", en: "$1,200 / cycle" },
  "agentGlobal.koc.priceDesc": {
    zh: "平均单条创意 Brief 成本仅 $20，性价比远超任何海外代运营。",
    en: "Average cost per creative brief is only $20, far more cost-effective than any overseas agency.",
  },

  // Verified Results
  "agentGlobal.stats.title": { zh: "已验证战绩", en: "Verified Results" },
  "agentGlobal.stats.arr": { zh: "年营收 ARR", en: "Annual ARR" },
  "agentGlobal.stats.growth": { zh: "月度复合增长", en: "Monthly Growth" },
  "agentGlobal.stats.koc": { zh: "全球 KOC 矩阵", en: "Global KOC Network" },
  "agentGlobal.stats.delivery": { zh: "起号交付周期", en: "Account Launch" },

  // Problem Statement
  "agentGlobal.problem.title": {
    zh: "AI Agent 的问题，不在技术，在 GTM",
    en: "The AI Agent Problem: Not Tech, But GTM",
  },
  "agentGlobal.problem1": { zh: "技术导向，而非用户导向", en: "Tech-driven, not user-driven" },
  "agentGlobal.problem2": { zh: "有功能，但无「刚需场景」", en: "Features exist, but no must-have scenarios" },
  "agentGlobal.problem3": { zh: "有流量，但无精准人群", en: "Traffic exists, but no precise audience" },

  // Case Studies
  "agentGlobal.cases.title": { zh: "客户战绩", en: "Client Results" },
  "agentGlobal.cases.desc": {
    zh: "我们不是给你做一条「能看」的视频 —— 我们做的是能把你的产品从 0 推到融资、能在 Product Hunt 冲榜、能在海外市场打开局面的增长资产。",
    en: "We don't just make watchable videos — we create growth assets that push your product from 0 to funding, rank on Product Hunt, and break into global markets.",
  },
  "agentGlobal.case1.title": { zh: "6小时破 100万", en: "1M views in 6 hours" },
  "agentGlobal.case1.name": { zh: "Blockit AI", en: "Blockit AI" },
  "agentGlobal.case1.desc": {
    zh: "用视频讲好创始人的故事，爆发式传播，撬动高转化。发布 6 小时突破百万观看量，1,214 注册，272 信用卡付费。",
    en: "Told the founder's story through video, driving viral spread and high conversion. 1M+ views in 6 hours, 1,214 sign-ups, 272 paid subscribers.",
  },
  "agentGlobal.case2.title": { zh: "300万+ 播放", en: "3M+ views" },
  "agentGlobal.case2.name": { zh: "Poly.app", en: "Poly.app" },
  "agentGlobal.case2.desc": {
    zh: "用纯视觉语言，把文件浏览器讲成 AI 时代的变革故事。累积播放量 300 万+，融资 $16M。",
    en: "Pure visual storytelling, turning a file browser into an AI revolution narrative. 3M+ cumulative views, raised $16M.",
  },
  "agentGlobal.case3.title": { zh: "400万+ 播放", en: "4M+ views" },
  "agentGlobal.case3.name": { zh: "Crunched", en: "Crunched" },
  "agentGlobal.case3.desc": {
    zh: "视频让复杂产品一眼就懂。累积播放量 400 万+，迅速打开欧美市场。",
    en: "Video made a complex product instantly understandable. 4M+ cumulative views, rapidly opened EU & US markets.",
  },

  // Services
  "agentGlobal.svc.title": { zh: "业务覆盖", en: "Service Coverage" },
  "agentGlobal.svc.desc": {
    zh: "无论您的产品处于冷启动期、成长期还是规模化阶段，MIST Ai 都能提供精准匹配当前阶段的增长策略。",
    en: "Whether your product is in cold start, growth, or scaling stage, MIST Ai provides growth strategies precisely matched to your current phase.",
  },
  "agentGlobal.svc1": { zh: "海外 KOL & KOC 营销", en: "Overseas KOL & KOC Marketing" },
  "agentGlobal.svc2": { zh: "Product Hunt 冲榜", en: "Product Hunt Launch" },
  "agentGlobal.svc3": { zh: "Launch Video 制作", en: "Launch Video Production" },
  "agentGlobal.svc4": { zh: "市场策略", en: "Market Strategy" },
  "agentGlobal.svc5": { zh: "SEO / GEO", en: "SEO / GEO" },
  "agentGlobal.svc6": { zh: "广告投放 / Paid Ads", en: "Paid Ads" },
  "agentGlobal.svc7": { zh: "社群 / Reddit 口碑", en: "Community / Reddit WOM" },

  // Growth Engine
  "agentGlobal.engine.title": { zh: "四步增长引擎", en: "4-Step Growth Engine" },
  "agentGlobal.engine.desc": { zh: "从 GTM 产品发布到品牌打造", en: "From GTM product launch to brand building" },
  "agentGlobal.step1.title": { zh: "诊断与策略", en: "Diagnosis & Strategy" },
  "agentGlobal.step1.desc": { zh: "GTM 策略制定，明确核心价值主张", en: "GTM strategy formulation, defining core value proposition" },
  "agentGlobal.step2.title": { zh: "市场发布", en: "Market Launch" },
  "agentGlobal.step2.desc": { zh: "Product Hunt 冲榜，Launch Video 引爆声量", en: "Product Hunt ranking, Launch Video for explosive exposure" },
  "agentGlobal.step3.title": { zh: "规模增长", en: "Scale Growth" },
  "agentGlobal.step3.desc": { zh: "达人矩阵 + SEO + 多渠道投放，持续获客", en: "Creator network + SEO + multi-channel ads for continuous acquisition" },
  "agentGlobal.step4.title": { zh: "品牌沉淀", en: "Brand Building" },
  "agentGlobal.step4.desc": { zh: "IP 打造 + 社区运营，构建护城河", en: "IP building + community operations, building your moat" },

  // Impact Metrics
  "agentGlobal.impact.title": { zh: "助力 AI 产品实现突破性营销增长", en: "Driving Breakthrough Marketing Growth for AI Products" },
  "agentGlobal.metric1.value": { zh: "50+", en: "50+" },
  "agentGlobal.metric1.label": { zh: "全球合作专家", en: "Global Experts" },
  "agentGlobal.metric2.value": { zh: "30+", en: "30+" },
  "agentGlobal.metric2.label": { zh: "成功落地案例", en: "Success Cases" },
  "agentGlobal.metric3.value": { zh: "7天", en: "7 Days" },
  "agentGlobal.metric3.label": { zh: "快速启动", en: "Quick Start" },
  "agentGlobal.metric4.value": { zh: "15+", en: "15+" },
  "agentGlobal.metric4.label": { zh: "覆盖国家和地区", en: "Countries & Regions" },
  "agentGlobal.metric5.value": { zh: "100%", en: "100%" },
  "agentGlobal.metric5.label": { zh: "AI 赛道专注", en: "AI Track Focus" },
  "agentGlobal.metric6.value": { zh: "100%", en: "100%" },
  "agentGlobal.metric6.label": { zh: "客户满意度", en: "Client Satisfaction" },

  // CTA
  "agentGlobal.cta.title": { zh: "想为你的 AI 产品做一支这样的视频？", en: "Want a video like this for your AI product?" },
  "agentGlobal.cta.desc": { zh: "30 分钟免费策略诊断，看看能不能合作", en: "30-minute free strategy diagnosis to explore collaboration" },
  "agentGlobal.cta.button": { zh: "预约免费诊断", en: "BOOK FREE DIAGNOSIS" },
  "agentGlobal.consult": { zh: "免费咨询", en: "FREE CONSULTATION" },

  // AI Consulting
  "consulting.badge": { zh: "AI 咨询落地", en: "AI Consulting" },
  "consulting.heading1": { zh: "智能赋能", en: "AI-POWERED" },
  "consulting.heading2": { zh: "产业落地", en: "TRANSFORMATION" },
  "consulting.desc": {
    zh: "为传统行业提供从咨询规划到技术落地的端到端 AI 转型服务，让 AI 真正融入业务场景创造价值。",
    en: "End-to-end AI transformation services for traditional industries, from consulting and planning to technology implementation — making AI truly create value in business scenarios.",
  },
  "consulting.card1.title": { zh: "场景诊断", en: "Scenario Diagnosis" },
  "consulting.card1.desc": {
    zh: "深入业务场景，识别 AI 赋能的高价值切入点与优先级路径。",
    en: "Deep dive into business scenarios to identify high-value AI integration points and prioritized pathways.",
  },
  "consulting.card2.title": { zh: "方案设计", en: "Solution Design" },
  "consulting.card2.desc": {
    zh: "定制化 AI 解决方案架构设计，确保技术与业务的深度融合。",
    en: "Custom AI solution architecture design, ensuring deep integration of technology and business needs.",
  },
  "consulting.card3.title": { zh: "落地实施", en: "Implementation" },
  "consulting.card3.desc": {
    zh: "端到端的技术交付与部署，从 PoC 到生产环境的全流程支持。",
    en: "End-to-end technical delivery and deployment — full process support from PoC to production environment.",
  },
  "consulting.card4.title": { zh: "持续优化", en: "Continuous Optimization" },
  "consulting.card4.desc": {
    zh: "上线后持续的模型调优、效果监控与迭代优化，确保长期 ROI。",
    en: "Ongoing model tuning, performance monitoring, and iterative optimization post-launch for long-term ROI.",
  },

  // Portfolio
  "portfolio.eyebrow": { zh: "精选案例", en: "Selected Works" },
  "portfolio.heading": { zh: "孵化案例", en: "INCUBATION CASE" },
  "portfolio.spootialwolk.category": { zh: "空间智能", en: "Spatial Intelligence" },
  "portfolio.spootialwolk.desc": {
    zh: "空间智能与 AI 交互领航者，重新定义人机协作边界。",
    en: "Pioneer in spatial intelligence and AI interaction, redefining the boundaries of human-machine collaboration.",
  },
  "portfolio.kanying.category": { zh: "工业 AI", en: "Industrial AI" },
  "portfolio.kanying.desc": {
    zh: "工业视觉与 AI 检测专家，为传统制造注入智能基因。",
    en: "Expert in industrial vision and AI inspection, injecting intelligent DNA into traditional manufacturing.",
  },
  "portfolio.viewCase": { zh: "查看案例详情", en: "VIEW CASE STUDY" },

  // About
  "about.badge": { zh: "关于 MIST Ai", en: "About MIST Ai" },
  "about.heading1": { zh: "从 0 到 N 的", en: "0 TO N" },
  "about.heading2": { zh: "增长闭环", en: "GROWTH LOOP" },
  "about.desc": {
    zh: "MIST Ai 专注于 AI 产业化的全周期增长与资本服务平台。我们通过线上线下活动与社媒矩阵，链接技术创业者、产业资本与行业场景，构建从早期投资与孵化，到 GTM 增长（国内及出海），再到成长期融资对接，以及传统行业落地的从 0 到 N 闭环。",
    en: "MIST Ai is a full-lifecycle growth and capital services platform for AI industrialization. Through online and offline events and our social media matrix, we connect tech entrepreneurs, industry capital, and sector scenarios — building a 0-to-N loop from early investment & incubation, to GTM growth (domestic and global), to growth-stage financing, and traditional industry implementation.",
  },
  "about.engines.badge": { zh: "核心业务", en: "Core Business" },
  "about.engines.title": { zh: "三大增长引擎", en: "THREE GROWTH ENGINES" },
  "about.engine1.title": { zh: "资本与孵化", en: "Capital & Incubation" },
  "about.engine1.desc": {
    zh: "聚焦早期 AI 项目投资，曾成功孵化 SpatialWolk、瞰影科技等前沿项目，打通融资与成长的快车道。",
    en: "Focused on early-stage AI project investment, having successfully incubated cutting-edge projects like SpatialWolk and KanYing Tech, building the fast track from funding to growth.",
  },
  "about.engine2.title": { zh: "AI Agent出海", en: "AI Agent Global" },
  "about.engine2.desc": {
    zh: "专注 AI Agent 出海营销，提供从 GTM 策略规划、Product Hunt 联创、海外 KOL 联动到 SEO/GEO 与广告投放的全栈式服务，助力品牌构建精准转化的增长飞轮。",
    en: "Focused on AI Agent global marketing, providing full-stack services from GTM strategy planning, Product Hunt co-launch, overseas KOL partnerships to SEO/GEO and paid ads, helping brands build a precision-driven growth flywheel.",
  },
  "about.engine3.title": { zh: "AI 技术咨询与开发", en: "AI Tech Consulting & Dev" },
  "about.engine3.desc": {
    zh: "提供从 AI/ML 战略咨询、概念验证（POC）、MVP 开发到定制化模型与 AIGC 内容生成的全周期技术赋能。",
    en: "Providing full-cycle technical empowerment from AI/ML strategic consulting, proof of concept (POC), MVP development to custom models and AIGC content generation.",
  },
  "about.community.title": { zh: "行业生态", en: "Industry Ecosystem" },
  "about.community.desc": {
    zh: "通过定期的行业峰会与沉淀海量资讯的知识星球，MIST Ai 汇聚了一线创始人、专家与投资人，持续为 AI 产业化进程输出实战洞察与核心价值。",
    en: "Through regular industry summits and our Knowledge Hub packed with insights, MIST Ai brings together top founders, experts, and investors, continuously delivering practical insights and core value for AI industrialization.",
  },
  "global.badge": { zh: "全球基础设施", en: "Global Infrastructure" },
  "global.heading1": { zh: "我们的", en: "OUR" },
  "global.heading2": { zh: "办公室", en: "OFFICES" },
  "global.desc": {
    zh: "MIST Ai 在全球核心科技枢纽设有办公室，链接最顶尖的技术资源与产业资本。我们不仅是连接者，更是 AI 时代的全球基础设施。",
    en: "MIST Ai has offices in key global tech hubs, connecting top technology resources and industry capital. We are not just connectors, but the global infrastructure of the AI era.",
  },
  "global.hangzhou": { zh: "杭州", en: "Hangzhou" },
  "global.hangzhou.label": { zh: "总部 & 技术引擎", en: "HQ & Tech Engine" },
  "global.paris": { zh: "巴黎", en: "Paris" },
  "global.paris.label": { zh: "欧洲门户", en: "European Gateway" },
  "global.singapore": { zh: "新加坡", en: "Singapore" },
  "global.singapore.label": { zh: "东南亚增长中心", en: "SEA Growth Hub" },
  "global.sv": { zh: "硅谷", en: "Silicon Valley" },
  "global.sv.label": { zh: "全球资本", en: "Global Capital" },

  // Knowledge Hub
  "knowledge.badge": { zh: "知识星球", en: "Knowledge Hub" },
  "knowledge.heading1": { zh: "AI 产业化", en: "AI INDUSTRY" },
  "knowledge.heading2": { zh: "知识社区", en: "KNOWLEDGE HUB" },
  "knowledge.desc": {
    zh: "加入 MIST Ai 知识星球，获取最前沿的 AI 产业化洞察、独家研究报告与行业深度分析。与顶尖从业者共同探讨技术趋势与产业机遇。",
    en: "Join MIST Ai Knowledge Hub for cutting-edge AI industrialization insights, exclusive research reports, and in-depth industry analysis. Discuss tech trends and opportunities with top practitioners.",
  },
  "knowledge.feature1.title": { zh: "独家报告", en: "Exclusive Reports" },
  "knowledge.feature1.desc": {
    zh: "定期发布 AI 产业化趋势报告、赛道分析与投资研判。",
    en: "Regular AI industrialization trend reports, sector analysis, and investment insights.",
  },
  "knowledge.feature2.title": { zh: "深度社区", en: "Deep Community" },
  "knowledge.feature2.desc": {
    zh: "与 AI 创业者、投资人、产业专家面对面交流互动。",
    en: "Face-to-face interaction with AI entrepreneurs, investors, and industry experts.",
  },
  "knowledge.feature3.title": { zh: "实战案例", en: "Case Studies" },
  "knowledge.feature3.desc": {
    zh: "真实的 AI 落地案例拆解与经验分享，加速你的认知升级。",
    en: "Real AI implementation case studies and experience sharing to accelerate your insights.",
  },
  "knowledge.join": { zh: "加入知识星球", en: "JOIN THE HUB" },

  // Events
  "events.badge": { zh: "活动", en: "Events" },
  "events.heading1": { zh: "线下活动", en: "UPCOMING" },
  "events.heading2": { zh: "与社群", en: "EVENTS" },
  "events.desc": {
    zh: "MIST Ai Talk 是 MIST Ai 旗下的线下闭门沙龙，作为「从 0 到 N」闭环的认知入口，每期聚焦最新的 AI 技术、项目实战与出海增长，汇聚正在一线解决问题的创始人、技术人与投资人。",
    en: "MIST Ai Talk is MIST Ai's exclusive offline salon series — the cognitive gateway to our 0-to-N loop. Each session focuses on the latest AI technologies, hands-on project practices, and global growth strategies, bringing together founders, engineers, and investors who are solving real problems on the front lines.",
  },
  "events.event1.title": { zh: "MIST Ai Talk 第十二期", en: "MIST Ai Talk #12" },
  "events.event1.date": { zh: "2026.4.17 · 上海", en: "Apr 17, 2026 · Shanghai" },
  "events.event1.topic": { zh: "Agentic AI 与大模型企业落地 · 联合安世加", en: "Agentic AI & Enterprise LLM Deployment · Co-hosted with Ansejia" },
  "events.event2.title": { zh: "MIST Ai Talk 第十一期", en: "MIST Ai Talk #11" },
  "events.event2.date": { zh: "2026.4.12 · 杭州", en: "Apr 12, 2026 · Hangzhou" },
  "events.event2.topic": { zh: "从产品落地到海外增长：冷启动、定价模型与渠道破局", en: "From Product Launch to Overseas Growth: Cold Start, Pricing & Channels" },
  "events.event3.title": { zh: "MIST Ai Talk 第十期", en: "MIST Ai Talk #10" },
  "events.event3.date": { zh: "2026.3.28 · 上海", en: "Mar 28, 2026 · Shanghai" },
  "events.event3.topic": { zh: "大家一起玩 · 数字主权与 OpenClaw 开源架构", en: "Let's Play Together · Digital Sovereignty & OpenClaw Open-Source" },
  "events.event4.title": { zh: "MIST Ai Talk 第九期", en: "MIST Ai Talk #9" },
  "events.event4.date": { zh: "2026.3.14 · 杭州", en: "Mar 14, 2026 · Hangzhou" },
  "events.event4.topic": { zh: "OpenClaw 搞钱派对 · 多智能体协同与 AI SDR 实战", en: "OpenClaw Money Party · Multi-Agent Orchestration & AI SDR" },
  "events.event5.title": { zh: "MIST Ai Talk 第八期", en: "MIST Ai Talk #8" },
  "events.event5.date": { zh: "2026.2.7 · 杭州", en: "Feb 7, 2026 · Hangzhou" },
  "events.event5.topic": { zh: "拟人 AI 键盘，重塑社交智能", en: "Humanoid AI Keyboard — Reshaping Social Intelligence" },
  "events.event6.title": { zh: "MIST Ai Talk 第七期", en: "MIST Ai Talk #7" },
  "events.event6.date": { zh: "2026.1.31 · 杭州", en: "Jan 31, 2026 · Hangzhou" },
  "events.event6.topic": { zh: "AI Coding 的确定性交付与价值创造", en: "AI Coding: Deterministic Delivery & Value Creation" },
  "events.event7.title": { zh: "MIST Ai Talk 第六期", en: "MIST Ai Talk #6" },
  "events.event7.date": { zh: "2026.1.24 · 北京", en: "Jan 24, 2026 · Beijing" },
  "events.event7.topic": { zh: "AI 商业模式探讨与行业趋势分析", en: "AI Business Models & Industry Trend Analysis" },
  "events.event8.title": { zh: "MIST Ai Talk 第五期", en: "MIST Ai Talk #5" },
  "events.event8.date": { zh: "2026.1.17 · 杭州", en: "Jan 17, 2026 · Hangzhou" },
  "events.event8.topic": { zh: "AI 产品的商业化路径探索", en: "Exploring AI Product Commercialization Paths" },
  "events.event9.title": { zh: "MIST Ai Talk 第四期", en: "MIST Ai Talk #4" },
  "events.event9.date": { zh: "2026.1.10 · 杭州", en: "Jan 10, 2026 · Hangzhou" },
  "events.event9.topic": { zh: "Mizzen Insight — 重新定义用户研究", en: "Mizzen Insight — Redefining User Research" },
  "events.event10.title": { zh: "MIST Ai Talk 第三期", en: "MIST Ai Talk #3" },
  "events.event10.date": { zh: "2025.12.27 · 杭州", en: "Dec 27, 2025 · Hangzhou" },
  "events.event10.topic": { zh: "AI 创业者圆桌讨论", en: "AI Founder Roundtable Discussion" },
  "events.event11.title": { zh: "MIST Ai Talk 第二期", en: "MIST Ai Talk #2" },
  "events.event11.date": { zh: "2025.12.19 · 杭州", en: "Dec 19, 2025 · Hangzhou" },
  "events.event11.topic": { zh: "具身智能机器人本体与执行末端", en: "Embodied Intelligent Robot Bodies & End-Effectors" },
  "events.event12.title": { zh: "MIST Ai Talk 第一期", en: "MIST Ai Talk #1" },
  "events.event12.date": { zh: "2025.12.14 · 杭州", en: "Dec 14, 2025 · Hangzhou" },
  "events.event12.topic": { zh: "企业 LLM 智能路由架构", en: "Enterprise LLM Intelligent Routing Architecture" },
  "events.readMore": { zh: "阅读全文", en: "Read More" },

  // Footer
  "footer.heading1": { zh: "共建", en: "LET'S BUILD" },
  "footer.heading2": { zh: "未来", en: "THE FUTURE" },
  "footer.desc": {
    zh: "无论您是寻求增长的技术创业者，还是寻找优质标的的产业资本，MIST Ai 都是您最可靠的伙伴。",
    en: "Whether you're a tech entrepreneur seeking growth or industry capital looking for quality targets, MIST Ai is your most reliable partner.",
  },
  "footer.contactUs": { zh: "联系我们", en: "Contact Us" },
  "footer.copyright": { zh: "© 2026 MIST Ai — 保留所有权利 杭州迷雾智能科技有限公司", en: "© 2026 MIST Ai — All Rights Reserved Hangzhou Mist Intelligent Technology Co., Ltd." },
  "footer.privacy": { zh: "隐私政策", en: "Privacy" },
  "footer.terms": { zh: "服务条款", en: "Terms" },
} satisfies Record<string, Record<Lang, string>>;

type TranslationKey = keyof typeof translations;

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue>(null!);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = (key: TranslationKey) => translations[key][lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
