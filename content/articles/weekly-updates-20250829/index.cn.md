汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/cn/blog/v1.8.22)

*发布时间：2025-08-27*

#### 🐛 修复

- **[工作流]** 修复待办中心路由配置错误导致详情弹窗不显示的问题 ([#7452](https://github.com/nocobase/nocobase/pull/7452)) by @mytharcher

### [v1.8.21](https://www.nocobase.com/cn/blog/v1.8.21)

*发布时间：2025-08-26*

#### 🐛 修复

- **[文件管理器]** 修复文件表的 storage 字段编辑时的报错 ([#7393](https://github.com/nocobase/nocobase/pull/7393)) by @mytharcher
- **[工作流：并行分支节点]** 修复并行分支节点在全部执行模式下状态判断错误导致提前执行完成的问题 ([#7445](https://github.com/nocobase/nocobase/pull/7445)) by @mytharcher
- **[工作流：审批]** 补充审批完成通知中自定义模板的状态变量 by @mytharcher

### [v1.8.20](https://www.nocobase.com/cn/blog/v1.8.20)

*发布时间：2025-08-25*

#### 🚀 优化

- **[工作流]** 调整工作流变量接口，支持预置额外变量列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher
- **[工作流：审批]**

  - 支持在自定义通知中使用审批相关变量 by @mytharcher
  - 支持结束节点终止流程后，变更审批状态 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复在某些场景下，移动端数据选择器弹窗编辑记录时出错的问题 ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe
  - 子表格中附件字段必填校验不生效的问题 ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh
  - 修复附件 URL 字段的 URL 中包含查询参数时图标展示不正确的问题 ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
- **[database]**

  - 修复了站内消息加载更多时出现的 MySQL 语法错误。 ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie
  - 修复导出 Number 类型字段时的精度问题 ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie
- **[undefined]** 修复 MySQL 外部数据源中仅按日期字段筛选数据不正确的问题 ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie
- **[操作：导入记录]** 修复了当表的主键为单行文本时导入失败的问题 ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie
- **[工作流]**

  - 补全自动删除工作流的执行状态选项 ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher
  - 修复待办中心移动端菜单相关问题 ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher
- **[操作：导入记录 Pro]** 修复在 xlsx 导入中使用字符串主键时更新结果不符合预期的问题。 by @aaaaaajie

### [v1.8.19](https://www.nocobase.com/cn/blog/v1.8.19)

*发布时间：2025-08-22*

#### 🎉 新特性

- **[工作流：审批]** 为通知配置增加内联模板类型 by @mytharcher

#### 🚀 优化

- **[client]** 支持 Select 组件在阅读态时可以展示字符串标识的图标 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
- **[database]** 优化 ACL Meta 查询性能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[移动端]** 优化移动端弹窗组件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

#### 🐛 修复

- **[database]** 修复了在读取 Postgres 外部数据表时，会错误包含其他 schema 视图的问题 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[区块：模板]** 修复了邮件区块在继承模版中不可见的问题 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[操作：导入记录 Pro]** 导入识别重复记录时，禁止设置关系字段 by @aaaaaajie
- **[工作流：审批]** 修复加签时加载用户列表为空的问题 by @mytharcher
- **[迁移管理]** 生成迁移文件的时候跳过最新版本 pg_dump 生成的 `\restrict` 和 `\unrestrict` 命令，解决还原报错的问题 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/cn/blog/v1.9.0-beta.5)

*发布时间：2025-07-24*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/cn/blog/v1.9.0-alpha.3)

*发布时间：2025-07-18*
