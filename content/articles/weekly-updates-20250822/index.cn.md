汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/cn/blog/v1.8.18)

*发布时间：2025-08-19*

#### 🚀 优化

- **[工作流]** 将节点选择菜单更新为两列布局，以提升信息密度使用户能同时查看更多选项 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
- **[授权设置]** 授权设置中，每次拷贝最新InstanceID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

#### 🐛 修复

- **[client]**

  - 修复 联动规则为空判断时，数字 0 也视为空的问题 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - 修复链接按钮中文字换行的问题 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
- **[移动端]** 修复移动端日期字段显示为错误格式的问题 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
- **[Office 文件预览]** 修复上传文件至附件 URL 字段报错的问题 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
- **[工作流]** 修复编辑工作流分类时报错和表单数据丢失的问题 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
- **[工作流：邮件发送节点]** 修复邮件节点可能存在恢复执行不正常的问题 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[工作流：自定义操作事件]** 在对多条数据的触发成功后清空选中行 by @mytharcher
- **[模板打印]** 多行数据中单选字段打印 by @jiannx
- **[工作流：审批]** 修复加载审批记录中外部数据源数据出现 404 的问题 by @mytharcher

### [v1.8.17](https://www.nocobase.com/cn/blog/v1.8.17)

*发布时间：2025-08-15*

#### 🎉 新特性

- **[工作流：审批]** 支持在同一个工作流中使用统一的待办任务标题 by @mytharcher

#### 🚀 优化

- **[用户认证]** 使用 token 参数登录成功后，移除 URL token 参数 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[模板打印]** 支持多对多数组字段 by @jiannx

#### 🐛 修复

- **[移动端]** 修复移动端审批弹窗中的表单提交的数据不正确的问题 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
- **[工作流]** 修复待办中心的页面标题翻译 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
- **[日历]** 修复了日历事件悬停提示框未显示事件标题字段内容，显示为 “[object Object]” 的问题 ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[通知：站内信]** 修复多语言翻译 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
- **[文件管理器]** 移除文件上传大小的上限提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
- **[文件存储：S3 (Pro)]**

  - 弃用可能造成问题的 `attachmentField` 参数 by @mytharcher
  - 修复 IAM 授权方式无法上传文件的问题 by @mytharcher

### [v1.8.16](https://www.nocobase.com/cn/blog/v1.8.16)

*发布时间：2025-08-14*

#### 🚀 优化

- **[通知：站内信]** 移除通过 `console.log` 输出的 SQL 日志 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

#### 🐛 修复

- **[server]** 部分请求没有 `ctx.action`, 导致审计日志中间件报错 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[数据表字段：公式]** 修复公式输入由于变量类型导致无法通过验证的问题 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[备份管理器]** 备份大量文件时，任务状态可能提前显示为“已成功”，但实际仍在进行中 by @gchust
