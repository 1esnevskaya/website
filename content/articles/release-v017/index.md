## New Features

To reduce development learning costs and provide a better frontend development experience, we have phased a reconstruction of the frontend core over the past few months, including:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

This time, v0.17 has refactored the UI Schema designer-related SchemaInitializer and SchemaSettings.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

To address the difficulty for users to get started, we have also reorganized various sections of the documentation:

* [Plugin Development](https://docs.nocobase.com/development) (completely revised and published)
* [API Reference / Client](https://client.docs.nocobase.com/core/application/application) (new section, already published)
* User Manual (completely revised, will be released in the next one to two weeks)
* Plugin List (new section, including introductions, usage, and extension development instructions for all existing plugins, will be released in the next one to two weeks)

## Incompatible Changes

### Changes to SchemaInitializer

* Added `SchemaInitializerManager` for registering `SchemaInitializer`
* Added `useSchemaInitializerRender()` to replace the original `useSchemaInitializer()` `render()`
* Added `useSchemaInitializerItem()` for obtaining the context of the current initialization item
* Added `SchemaInitializerItemGroup` component as the default component for `type: 'itemGroup'`
* Added `SchemaInitializerSubMenu` component as the default component for `type: 'subMenu'`
* Added `SchemaInitializerDivider` component as the default component for `type: 'divider'`
* Added `SchemaInitializerChildren` component for custom rendering of multiple list items
* Added `SchemaInitializerChild` component for custom rendering of a single list item
* Changed the responsibilities of `SchemaInitializerContext` for storing the context of the current initializer
* Changed the responsibilities of `useSchemaInitializer()` for obtaining the context of the current initializer
* Changed `function SchemaInitializer` to `class SchemaInitializer` for defining initializer
* Changed parameters of `SchemaInitializer`
  * Added `name` required parameter for the value of `x-initializer`
  * Added `Component` parameter for custom rendering of the button. Default is `SchemaInitializerButton`.
  * Added `componentProps`, `style` for configuring the properties and style of `Component`
  * Added `ItemsComponent` parameter for custom rendering of the list. Default is `SchemaInitializerItems`.
  * Added `itemsComponentProps`, `itemsComponentStyle` for configuring the properties and style of `ItemsComponent`
  * Added `popover` parameter for configuring whether to display the `popover` effect
  * Added `useInsert` parameter for when the `insert` function needs to use hooks
  * Changed `dropdown` parameter to `popoverProps`, using `Popover` instead of `Dropdown`
* Changed parameters of `items` for `SchemaInitializer`
  * Added `useChildren` function for dynamically controlling child items
  * Added `componentProps` function for the properties of the component itself
  * Added `useComponentProps` function for dynamically processing the props of the component
  * Changed `key` parameter to `name` for the unique identification of list items
  * Changed `visible` parameter to `useVisible` function for dynamically controlling whether to display
  * Changed `component` parameter to `Component` for rendering list items
* Changed `SchemaInitializer.Button` to `SchemaInitializerButton`, the default value for the Component parameter of SchemaInitializer
* Changed `SchemaInitializer.Item` to `SchemaInitializerItem`, with unchanged parameters
* Changed `SchemaInitializer.ActionModal` to `SchemaInitializerActionModal`, with unchanged parameters
* Changed `SchemaInitializer.SwitchItem` to `SchemaInitializer.Switch`, with unchanged parameters
* Deleted `SchemaInitializerProvider`, replaced by `SchemaInitializerManager`
* Deleted `SchemaInitializer.itemWrap`, no longer need to wrap the `item` component

### Changes to SchemaSettings

* Added `SchemaSettingsManager` for registering `SchemaSettings`
* Added `useSchemaSettingsItem()`
* Added `useSchemaSettingsRender()`
* Added `x-settings` parameter for configuring schema settings
* Added `x-toolbar` parameter for configuring schema toolbar
* Added `SchemaToolbar` component for customizing schema toolbar
* Added `useSchemaToolbarRender()` to replace the original `useDesigner()`
* Changed `function SchemaSettings` to `class SchemaSettings` for defining settings
* Changed the original `SchemaSettings` to `SchemaSettingsDropdown`
* Changed `SchemaSettings.Item` to `SchemaSettingsItem`
* Changed `SchemaSettings.ItemGroup` to `SchemaSettingsItemGroup`
* Changed `SchemaSettings.SubMenu` to `SchemaSettingsSubMenu`
* Changed `SchemaSettings.Divider` to `SchemaSettingsDivider`
* Changed `SchemaSettings.Remove` to `SchemaSettingsRemove`
* Changed `SchemaSettings.SelectItem` to `SchemaSettingsSelectItem`
* Changed `SchemaSettings.CascaderItem` to `SchemaSettingsCascaderItem`
* Changed `SchemaSettings.SwitchItem` to `SchemaSettingsSwitchItem`
* Changed `SchemaSettings.ModalItem` to `SchemaSettingsModalItem`
* Changed `SchemaSettings.ActionModalItem` to `SchemaSettingsActionModalItem`
* Deleted `x-designer` parameter, deprecated, will be removed in the future, use `x-toolbar` instead
* Deleted `useDesigner()`, deprecated, will be removed in the future, use `useSchemaToolbarRender()` instead

For more details, see [Incompatible Changes in NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
