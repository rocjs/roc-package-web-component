# Hooks for `roc-package-web-component-dev`

## Hooks
* [roc-package-base-dev](#roc-package-base-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)
  * [run-build-command](#run-build-command)
  * [run-dev-command](#run-dev-command)
* [roc-package-module-dev](#roc-package-module-dev)
  * [babel-load-plugins](#babel-load-plugins)
  * [babel-load-presets](#babel-load-presets)
* [roc-package-web-component-dev](#roc-package-web-component-dev)
  * [run-dev-command](#run-dev-command)
  * [server-started](#server-started)
* [roc-package-webpack-dev](#roc-package-webpack-dev)
  * [build-webpack](#build-webpack)
  * [create-watchers](#create-watchers)
  * [get-webpack-targets](#get-webpack-targets)
* [roc-plugin-style-css](#roc-plugin-style-css)
  * [add-style](#add-style)

## roc-package-base-dev

### after-clean

Hook point for adding code that runs after the clean command is invoked.

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

### before-clean

Hook point for adding code that runs before the clean command is invoked.

__Initial value:__ _Nothing_  
__Expected return value:__ `[String]`

#### Arguments

| Name     | Description                                    | Type |
| -------- | ---------------------------------------------- | ---- |
| settings | The settings object that is received from Roc. | `{}` |

### run-build-command

Use to add things that should react to the build command being called.

__Initial value:__ _Nothing_  
__Expected return value:__ `Function`

#### Arguments

| Name    | Description                                                                            | Type       |
| ------- | -------------------------------------------------------------------------------------- | ---------- |
| targets | The targets to build for, will be based on settings or a possible argument if defined. | `[String]` |

### run-dev-command

Use to add things that should react to the dev command being called.

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

#### Arguments

| Name    | Description                                                                           | Type       |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| targets | The targets use for dev, will be based on settings or a possible argument if defined. | `[String]` |

## roc-package-module-dev

### babel-load-plugins

Expected to return a concatenated array with the final presets to use.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

#### Arguments

| Name   | Description                                       | Type     |
| ------ | ------------------------------------------------- | -------- |
| target | The target, will by default be either es5 or es6. | `String` |

### babel-load-presets

Expected to return a presets to add to the array of presets to use.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

#### Arguments

| Name   | Description                                       | Type     |
| ------ | ------------------------------------------------- | -------- |
| target | The target, will by default be either es5 or es6. | `String` |

## roc-package-web-component-dev

### run-dev-command

Use to add things that should react to the dev command being called, will start dev server

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

#### Arguments

| Name    | Description               | Type       |
| ------- | ------------------------- | ---------- |
| targets | Will always be `["web"]`. | `[String]` |

### server-started

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

#### Arguments

| Name | Description                              | Type       |
| ---- | ---------------------------------------- | ---------- |
| port | The port that the server has started on. | `Integer`  |
| path | The path that the server has started on. | `Filepath` |

## roc-package-webpack-dev

### build-webpack

Used to create the final Webpack configuration object.

__Initial value:__ `{"buildConfig":{}}`  
__Expected return value:__ `{}`

#### Arguments

| Name   | Description                                                         | Type     |
| ------ | ------------------------------------------------------------------- | -------- |
| target | The target for which the Webpack configuration should be build for. | `String` |

### create-watchers

Used to add watchers that should follow a specific format.

__Initial value:__ `{}`  
__Expected return value:__ `{Function}`

### get-webpack-targets

Used to inform which targets that should be considered as Webpack targets. Actions should concat the previousValue to build the complete value.

__Initial value:__ `[]`  
__Expected return value:__ `[String]`

## roc-plugin-style-css

### add-style

Used for adding additional style loaders.

Important that the _actions_ return an object matching the following:

`{ extensions: String/[String], loaders: String/[String] }`

__Initial value:__ _Nothing_  
__Expected return value:__ `{String / [String]}`
