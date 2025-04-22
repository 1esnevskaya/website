### 🚀 优化

- **[database]**
  - 为多行文本类型字段增加去除首尾空白字符的选项 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher

  - 为单行文本增加自动去除首尾空白字符的选项 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[文件管理器]** 为存储引擎表的文本字段增加去除首尾空白字符的选项 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[工作流]** 优化代码 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[工作流：审批]** 支持审批表单使用区块模板 by @mytharcher

### 🐛 修复

- **[database]** 避免“日期时间（无时区）”字段在值未变动的更新时触发值改变 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher

- **[client]**
  - 关系字段（select）放出关系表字段时默认显示 N/A ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh

  - 修复 `SchemaInitializerItem` 配置了 `items` 时 `disabled` 属性无效的问题 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher

  - 级联组件删除后重新选择时出现 'The value of xxx cannot be in array format' ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh

- **[数据表字段：多对多 (数组)]** 主表筛选带有多对多（数组）字段的关联表中的字段报错的问题 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[公开表单]** 查看权限包括 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[用户认证]** `AuthProvider` 中的 token 赋值 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[工作流]** 修复同步选项展示问题 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[区块：地图]** 地图管理必填校验不应通过空格输入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[工作流：审批]**
  - 修复审批表单中的前端变量 by @mytharcher

  - 修复分支模式下配置拒绝则结束时的流程问题 by @mytharcher

