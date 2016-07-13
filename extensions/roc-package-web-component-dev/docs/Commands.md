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
* [development](#development)
    * [build](#build)
    * [clean](#clean)
    * [dev](#dev)
* [meta](#meta)
    * [docs](#docs)
    * [list-settings](#list-settings)

## development
__Project development__

```
roc development <command>
```
Commands for development purposes.


### build
__Used to build the current project.__

```
roc development build [targets]
```

#### Arguments
| Name    | Description                                                                           | Default | Type | Required | Can be empty |
| ------- | ------------------------------------------------------------------------------------- | ------- | ---- | -------- | ------------ |
| targets | For what targets the project should be built for, overrides the settings if provided. |         |      | No       | Yes          |

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-web-component/extensions/roc-package-web-component-dev/docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev, roc-package-module-dev, roc-package-web-component-dev

### clean
__Cleans the current project.__

```
roc development clean
```

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-web-component/extensions/roc-package-web-component-dev/docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev

### dev
__Used to start the current project in development mode.__

```
roc development dev
```
Will start a demo server that will load the component.

By default an internal template will be used but it can easily be changed. Important to note when changing the template is that http://mozilla.github.io/nunjucks/ is used.

Two template variables is available:
```
name   The name of the project, can be used to display <title> and run a JavaScript function.
bundlePath    The bundle path, used to add the script to the template.
```

####  Settings options
* [build](/Users/gustaf/VG/public/roc-package/roc-package-web-component/extensions/roc-package-web-component-dev/docs/Settings.md#build)
* [dev](/Users/gustaf/VG/public/roc-package/roc-package-web-component/extensions/roc-package-web-component-dev/docs/Settings.md#dev)

####  Defined by extensions
roc-abstract-package-base-dev, roc-package-module-dev, roc-package-web-component-dev

## meta
__Meta commands__

```
roc meta <command>
```
Meta commands that can be used to generate meta data about the current project.


### docs
__Generates documentation for the current project.__

```
roc meta docs
```

#### Command options
| Name            | Description | Default        | Type | Required | Can be empty |
| --------------- | ----------- | -------------- | ---- | -------- | ------------ |
| --hide-commands |             |                |      | No       | Yes          |
| --html          |             | `false`        |      | No       | Yes          |
| --markdown      |             | `true`         |      | No       | Yes          |
| --mode          |             | `"github.com"` |      | No       | Yes          |
| --output        |             | `"docs"`       |      | No       | Yes          |

####  Defined by extensions
roc

### list-settings
__Prints all the available settings that can be changed.__

```
roc meta list-settings
```

####  Defined by extensions
roc

