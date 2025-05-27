### 🎉 新特性

- **[client]** 表单中的操作按钮联动规则 支持「当前表单」变量 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh

- **[undefined]** 添加导入插件日志 by @aaaaaajie

- **[操作：导入记录]** 添加导入插件日志 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie

### 🚀 优化

- **[client]** 增加阅读状态图片的内置尺寸选项 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh

- **[数据表字段：附件（URL）]** attachment URL 字段支持更多阅读状态的内置尺寸 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh

- **[工作流]** 支持复制任意多版本的草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

### 🐛 修复

- **[client]**
  - 详情区块联动规则按钮缺陷 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh

  - 联动规则切换操作符时应清空右侧变量值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh

  - 联动规则中对日期变量的操作符判断逻辑错误 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh

  - 联动规则中切换操作符时操作符缺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh

  - 二次确认变量解析不兼容{{title}}数据 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh

  - 改进联动规则表达式赋值组件样式 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh

  - 二次确认变量解析不兼容{{title}}数据 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh

  - 被隐藏的字段，依然会显示出来 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe

- **[database]** 导入文本字段是数字值时失败 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie

- **[数据可视化]**
  - 在区块级别操作中打开弹窗，添加图表不显示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile

  - 修复筛选嵌套多对多字段报错 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile

- **[操作：导出记录]**
  - 导入导出字段配置中删除字段严重卡顿 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh

  - 导出多级关联关系和附件 URL 时的空值问题。 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie

  - 修复导出长文本错误 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie

- **[文件管理器]** 修复无外键权限时创建文件记录 URL 无效的问题 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher

- **[工作流]** 修复直接打开待办中心弹窗链接后无法后退关闭的问题 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher

- **[操作：复制记录]** 复制数据后编辑时，首次点击字段输入会关闭弹窗的问题 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh

- **[区块：模板]** 保存为继承模版后弹窗渲染错误 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust

- **[工作流：测试工具包]** 修复由于缺少必要插件造成失败的测试用例 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher

- **[工作流：操作后事件]** 修复操作后事件中当前操作者变量在 Handlebars 模板中无法访问属性的问题 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher

- **[工作流：人工处理节点]** 修复待办中心计数错误问题 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher

- **[区块：操作面板]** 操作面板在暗黑模式下颜色不对 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe

- **[操作：导出记录 Pro]**
  - pro 导入导出字段配置中删除字段卡顿 by @katherinehhh

  - 修复导出长文本错误 by @aaaaaajie

- **[工作流：子流程]** 修复不存在触发器时导致的页面崩溃 by @mytharcher

- **[模板打印]**
  - 修复格式化器找不到问题。 by @sheldon66

  - 修复格式化器未找到 by @sheldon66

- **[文件存储：S3 (Pro)]**
  - 变更为使用数据表字段来定位存储引擎 by @mytharcher

  - 访问地址有效期无效 by @jiannx

- **[工作流：审批]** 修复待办中心计数错误问题 by @mytharcher

