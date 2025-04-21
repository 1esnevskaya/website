### 🎉 New Features

- **[UI schema storage]** Added localization module for UISchema, enabling custom translations for schema title and description ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

### 🚀 Improvements

- **[utils]** Add duration extension for dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[client]**
  - Support to search field in Filter component ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - Add `trim` API for `Input` and `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

- **[Workflow]** Optimize save job logic ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher

- **[Error handler]** Support custom title in AppError component. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[IP restriction]** Update IP restriction message content. by @sheldon66

- **[File storage: S3(Pro)]** Support global variables in storage configuration by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - The relationship fields in the filter form report an error after the page is refreshed because x-data-source is not carried ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - data issue with Gantt block in tree collection ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - blank area between the block template configuration page title and the menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust

  - rule with 'any' condition does not take effect when condition list is empty ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - x-disabled property not taking effect on form fields ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - variable parse failure when URL parameters contain Chinese characters ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

  - field label display issue to prevent truncation by colon ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

- **[Action: Export records]** missing filter params when exporting data after changing pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[Users]** Issue with parsing the user profile form schema ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[Mobile]** single-select field with 'contains' filter on mobile does not support multiple selection ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[Access control]** Correct role union calculation logic ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie

- **[Block: template]** Modify and delete same fields from template and block, after creating a block from template, can cause rendering errors ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust

- **[Email manager]**
  - Fix missing await for next call. by @jiannx

  - fix email management permission cannot view email list by @jiannx

- **[File storage: S3(Pro)]**
  - Fix missing await for next call. by @jiannx

  - Throw error to user when upload logo to S3 Pro storage (set to default) by @mytharcher

- **[Workflow: Approval]** Fix `updatedAt` changed after migration by @mytharcher

- **[Migration manager]** migration log creation time is displayed incorrectly in some environments by @gchust

