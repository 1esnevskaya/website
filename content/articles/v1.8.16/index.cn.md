### 🚀 优化

- **[通知：站内信]** 移除通过 `console.log` 输出的 SQL 日志 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

### 🐛 修复

- **[server]** 部分请求没有 `ctx.action`, 导致审计日志中间件报错 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile

- **[数据表字段：公式]** 修复公式输入由于变量类型导致无法通过验证的问题 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher

- **[备份管理器]** 备份大量文件时，任务状态可能提前显示为“已成功”，但实际仍在进行中 by @gchust

