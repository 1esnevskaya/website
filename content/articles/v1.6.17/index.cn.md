### 🚀 优化

- **[utils]** 为 dayjs 包增加时长扩展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[client]**
  - 支持筛选组件中对字段进行搜索 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - 为 `Input` 和 `Variable.TextArea` 组件增加 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

- **[错误处理器]** 在 AppError 组件中支持自定义标题。 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[IP 限制]** 更新 IP 限制消息内容。 by @sheldon66

- **[文件存储：S3 (Pro)]** 支持存储引擎的配置中使用全局变量 by @mytharcher

### 🐛 修复

- **[client]**
  - 联动规则条件设置为任意且无条件内容时属性设置不生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - 树表使用甘特图区块时数据显示异常 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - 筛选表单中的关系字段在刷新页面后，由于没有携带 x-data-source 而报错 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - 链接中中文参数变量值解析失败 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

- **[用户]** 用户个人资料表单 schema 的解析问题 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[移动端]** 下拉单选字段在移动端设置筛选符为包含时组件未支持多选 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[操作：导出记录]** 筛选数据后切换分页再导出时筛选参数丢失 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[邮件管理]** 邮件管理权限无法查看邮件列表 by @jiannx

- **[文件存储：S3 (Pro)]** 当用户上传 logo 失败时提示错误（设置为默认存储的 S3 Pro） by @mytharcher

- **[工作流：审批]** 修复更新时间在迁移后变化 by @mytharcher

- **[迁移管理]** 部分服务器环境下迁移日志创建日期显示不正确 by @gchust

