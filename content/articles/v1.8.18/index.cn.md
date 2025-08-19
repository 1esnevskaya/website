### 🚀 优化

- **[工作流]** 将节点选择菜单更新为两列布局，以提升信息密度使用户能同时查看更多选项 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
- **[授权设置]** 授权设置中，每次拷贝最新InstanceID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

### 🐛 修复

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
