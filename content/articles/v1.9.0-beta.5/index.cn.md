### 🎉 新特性

- **[server]** 支持通过环境变量配置请求体大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273)) by @aaaaaajie

- **[工作流：并行分支节点]** 为并行分支节点增加“全部执行”的模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher

- **[认证：SAML 2.0]** 支持用户未认证时，自动跳转到 SSO登录页 by @2013xile

- **[Redis 消息队列适配器]** 新增基于 Redis 的事件队列适配器 by @mytharcher

- **[工作流: 日期计算节点]** 支持节点测试执行 by @mytharcher

### 🚀 优化

- **[server]** 内存队列适配器并发支持未满载时继续处理新任务 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher

- **[database]** 当数据量超过阈值时，自动启用简易分页模式 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie

- **[client]** 颜色选择器：新增四种推荐颜色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe

- **[AI 集成]** 移除调用 `saveJob` 的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) by @mytharcher

- **[工作流：人工处理节点]** storePopupContext 支持保存默认的上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe

- **[工作流]**
  - 为测试节点的变量增加 JSON 常量类型 ([#7274](https://github.com/nocobase/nocobase/pull/7274)) by @mytharcher

  - 在执行计划由于状态不可执行时用日志替代抛错 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher

  - 改进比较逻辑以兼容日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

- **[数据表字段：公式]** 增加更多可计算的字段类型 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher

- **[Redis 消息队列适配器]** Redis 队列适配器并发支持未满载时继续处理新任务 by @mytharcher

- **[工作流：JSON 计算]** JSON 计算节点支持可测试 by @mytharcher

- **[工作流：审批]** 支持当关联业务数据删除时，同时删除审批数据 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复下拉关系字段使用 formula 作为标题时未按模糊匹配查询的问题 ([#7280](https://github.com/nocobase/nocobase/pull/7280)) by @katherinehhh

  - 修复 子表单联动规则中缺失当前对象变量的问题 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh

  - 字段变更后，依赖该字段的关系字段没有清空值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe

  - 修复 Markdown 字段在详情视图中未正确渲染为 Markdown 的问题。 ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie

  - 数据选择器设置标题字段无效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe

  - 避免非关系字段在预加载关系字段配置中被选择 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher

  - 删除菜单时，没有删除 uiSchemas 表中对应的数据 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe

  - 修复 表格中操作列的样式规则未生效问题 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh

  - 修复历史数据中日期字段使用废弃的日期变量时显示异常的问题 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh

  - 修复联动规则中关系字段显示异常的问题 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) by @katherinehhh

  - 修复错误：Can't resolve 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe

- **[database]**
  - 修复当数据库表命名风格导致自动开启简单分页模式失效问题。 ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie

  - 表格区块设置mssql外部数据源默认主键排序，读取列表报错 ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie

  - 修复 PostgreSQL 大数据量导出 XLSX 时的报错 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie

  - 修复外部数据源表设置简单分页模式时的报错问题 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie

- **[auth]** 修复子应用配置中 `secret` 为空，无法登录的问题 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile

- **[工作流]** 修复错误的依赖版本 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher

- **[操作：批量编辑]** 数据选择器中无法进行批量编辑和批量更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe

- **[数据源管理]** 修复修改外部数据源导致属性重置 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie

- **[数据表字段：排序]** 修复了在复制操作中缺少排序字段的问题 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh

- **[数据源：外部 Oracle]** 修复修改外部数据源导致属性重置 by @aaaaaajie

- **[工作流：子流程]** 修复接收到召回信号时，待执行的计划不在当前实例时报错问题 by @mytharcher

- **[工作流：审批]**
  - 修复提交审批时的多级关系数据 by @mytharcher

  - Link 按钮链接地址为当前页面的弹窗，点击打开会显示 404 by @zhangzhonghe

  - 修复提交审批时的关系数据 by @mytharcher

  - 为审批记录列表增加审批已删除的容错 by @mytharcher

  - 修复删除数据时的异常 by @mytharcher

- **[邮件管理]** 邮件与标签关系表在mysql下异常 by @jiannx

