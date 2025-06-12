### 🎉 新特性

- **[审计日志]** 添加环境变量 `AUDIT_LOGGER_TRANSPORT` 来控制日志输出方式 by @2013xile

### 🚀 优化

- **[client]** 禁止将一个分组菜单移动到自己内部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

- **[日历]** 支持设置日历区块的周起始日（周日或周一） ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]** Markdown（vditor）字段查看模式，支持图片点击放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

- **[数据表字段：多对多 (数组)]** 修复数据表中 many-to-many(many) 字段的权限错误 ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

- **[评论]** 评论区块支持分页功能 by @katherinehhh

### 🐛 修复

- **[client]**
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh

  - 修复联动规则卡死的问题 ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe

  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - 修复上传组件的大小提示文字 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher

  - 修复：在 APIClient 中添加可选链以避免 handler 未定义时报错 ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66

  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe

  - 修复筛选表单中联动规则设置下拉选项字段的 options 不生效问题 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh

  - 筛选表单的验证规则会导致筛选按钮无效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe

  - 用联动规则无法清除子表格的必填标志 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe

  - 修复筛选区块参数错误的问题 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe

  - 修复了区块读取外部数据源视图数据时报错的问题。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie

  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher

  - 在联动规则中使用“当前对象”变量无效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe

- **[database]** 修复导入xlsx功能缺失的创建人和最后更新人字段 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie

- **[undefined]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 by @aaaaaajie

- **[操作：导入记录]**
  - 导入 xlsx 禁止多行文本字段插入非字符串格式数据 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

  - 修复子表导入关联字段报错的问题 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie

  - 修复导入XLSX树表格数据时批量编辑报错 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie

- **[数据可视化]**
  - 修复图表区块中筛选表单的日期字段设置为“介于”时组件未正确显示的问题 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh

  - 复选框字段在图表中应该显示标签值而不是原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile

- **[API 文档]** 非 NocoBase 官方插件无法展示API文档 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt

- **[工作流]**
  - 修复定时任务由于 `toJSON()` 导致的错误 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher

  - 修复触发器未正确配置时手动执行的报错 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher

  - 修复工作流不存在时的页面报错 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher

  - 修复数据表事件在新增或更新模式时，新增的数据不包含改变的字段导致不触发的问题 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher

- **[数据源管理]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie

- **[移动端]** 优化移动端弹窗卡顿的问题 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe

- **[操作：导出记录 Pro]** 修复在带条件导出附件时报错。 by @aaaaaajie

- **[工作流：JavaScript 节点]** 修复相对路径引入包失败的问题 by @mytharcher

- **[模板打印]** 修复权限解析错误并添加数据未找到的检查。 by @sheldon66

- **[工作流：审批]**
  - 避免未找到字段报错 by @mytharcher

  - 修复工作流删除之后报错的问题 by @mytharcher

  - 修复触发器提供的变量 by @mytharcher

  - 审批详情中重新加载文件数据以避免链接失效 by @mytharcher

  - 修复刷新审批内容详情页时 API 报错 by @mytharcher

- **[企业微信]** 网关中间件增加回调路径判断 by @2013xile

