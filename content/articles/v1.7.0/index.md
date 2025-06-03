## [v1.7.0](https://github.com/nocobase/nocobase/compare/v1.6.38...v1.7.0) - 2025-06-03

## New Feature

### Role Union

Role Union is a permission management mode. According to system settings, system developers can choose to use `Independent roles`, `Allow roles union`, or `Allow roles union`, to meet different permission requirements.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Reference: [Role Union](https://docs.nocobase.com/handbook/acl/manual)

### Verification and Two-Factor Authentication (2FA)

The original verification code feature has been upgraded to a comprehensive verification management system, supporting multiple authentication methods (such as TOTP). The system also supports two-factor authentication (2FA), which requires an additional verification step during login, on top of the password, significantly enhancing account security.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Reference:

* [Verification](https://docs.nocobase.com/handbook/verification)
* [Two-Factor Authentication](https://docs.nocobase.com/handbook/two-factor-authentication)
* [TOTP Authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Template Printing

Template printing now supports dynamic image and barcode rendering.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Reference: [Template Printing](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Multiple Keyword Filter

The multi-keyword filter plugin adds powerful text filtering capabilities to the NocoBase platform, enabling you to filter data using multiple keywords and greatly enhancing the flexibility and efficiency of data queries.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Reference: [Multiple keyword filter](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Date Filter Supports Relative Date Range Selection

Supports filtering by custom time offsets (days/weeks/months/quarters/years) and specific dates, enabling more flexible time range queries.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Left-side Variables

The left-side variables in a condition are used to define the "object being judged" in the linkage rule, i.e., the condition will evaluate this variable’s value to determine whether the linkage behavior should be triggered.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Reference: [Left-side Variables](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Inherited Template

Inherited templates are ideal when you want blocks to follow a template’s basic updates but also allow specific changes. Blocks inherit the template’s settings and can extend or override them. Settings not changed in the block will update automatically with the template.

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

Reference: [Inherited Template](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Block Linkage Rules

Block linkage rules allow users to dynamically control the visibility of blocks, enabling the management of element display at the block level.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Reference: [Block Linkage Rules](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### After Successful Submission

After successful submission, supports refreshing data in other blocks and navigating to detail pages with parameters.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Reference: [After Successful Submission](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Workflow Category Management

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Open Source Plugins For Department And Attachment URL

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Improvements

### Linkage Rule Property Enhancements

* Selectable fields now support configurable options
* Date fields now support setting a date range

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Reference: [Field Linkage Rules](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Import Pro

Import configuration now supports using multiple fields to uniquely identify records, as well as options to either overwrite or ignore blank cells during import.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Reference:[Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Performance Optimization For Exporting XLSX

* Memory overflow and application freezing when exporting large data tables
* There is a probability of duplicate data in the exported data
* Query optimization for exported data based on indexes, unique constraints, and index strategies
* Add an export concurrent queue and set the concurrency number through environment variables.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Reference:

* [Concurrent Exports](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [About Performance](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Performance Optimization For Importing XLSX Files

* Change the original single - row import strategy to batch insertion
* Reconstruct the duplicate identification mechanism. Change from single - row processing to batch processing while keeping the update logic and triggering workflow unchanged

Reference: [About Performance](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Workflow Execution Efficiency Improved By 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)

