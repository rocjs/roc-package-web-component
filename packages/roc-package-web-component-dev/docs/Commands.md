# Commands for `roc-package-web-component-dev`

## General Information
All commands can be called with some additional options as can be seen below.

### General options

| Name            | Description                                                                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -c, --config    | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --directory | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help      | Output usage information.                                                                                     | No       |
| -V, --verbose   | Enable verbose mode.                                                                                          | No       |
| -v, --version   | Output version number.                                                                                        | No       |

## Commands
* [build](#build)
* [clean](#clean)
* [dev](#dev)
* [list-settings](#list-settings)
* [markdown-actions](#markdown-actions)
* [markdown-hooks](#markdown-hooks)
* [markdown-settings](#markdown-settings)

## build
__Used to build the current project.__

```
roc-package-web-component-dev build [targets]
```

### Arguments

| Name    | Description                                                                           | Required | Type                    | Default |
| ------- | ------------------------------------------------------------------------------------- | -------- | ----------------------- | ------- |
| targets | For what targets the project should be built for, overrides the settings if provided. | No       | `[/^web$|^es5$|^es6$/]` |         |

### Settings options
* [build](/packages/roc-package-web-component-dev/docs/Settings.md#build)

## clean
__Cleans the current project.__

```
roc-package-web-component-dev clean
```

### Settings options
* [build](/packages/roc-package-web-component-dev/docs/Settings.md#build)

## dev
__Used to start the current project in development mode.__

```
roc-package-web-component-dev dev
```
Will start a demo server that will load the component.

By default an internal template will be used but it can easily be changed. Important to note when changing the template is that http://mozilla.github.io/nunjucks/ is used.

Two template variables is available:
```
name   The name of the project, can be used to display <title> and run a JavaScript function.
bundlePath    The bundle path, used to add the script to the template.
```

### Settings options
* [build](/packages/roc-package-web-component-dev/docs/Settings.md#build)
* [dev](/packages/roc-package-web-component-dev/docs/Settings.md#dev)

## list-settings
__Prints all the available settings that can be changed.__

```
roc-package-web-component-dev list-settings
```

## markdown-actions
__Prints all the registered actions in a markdown format.__

```
roc-package-web-component-dev markdown-actions
```

## markdown-hooks
__Prints all the registered hooks in a markdown format.__

```
roc-package-web-component-dev markdown-hooks
```

## markdown-settings
__Prints all the available settings that can be changed in a markdown format.__

```
roc-package-web-component-dev markdown-settings
```
