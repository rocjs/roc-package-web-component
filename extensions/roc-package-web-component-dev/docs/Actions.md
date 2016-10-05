# Actions for `roc-package-web-component-dev`

## Actions
* [roc-abstract-package-base-dev](#roc-abstract-package-base-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)
* [roc-plugin-babel](#roc-plugin-babel)
  * [babel-config](#babel-config)
* [roc-package-webpack-dev](#roc-package-webpack-dev)
  * [babel-config](#babel-config-1)
  * [build-webpack](#build-webpack)
  * [run-build-command](#run-build-command)
  * [run-dev-command](#run-dev-command)
* [roc-package-webpack-web-dev](#roc-package-webpack-web-dev)
  * [build-webpack](#build-webpack-1)
  * [create-watchers](#create-watchers)
  * [get-webpack-targets](#get-webpack-targets)
* [roc-package-module-dev](#roc-package-module-dev)
  * [babel-config](#babel-config-2)
  * [run-build-command](#run-build-command-1)
  * [run-dev-command](#run-dev-command-1)
* [roc-plugin-browsersync](#roc-plugin-browsersync)
  * [server-started](#server-started)
* [roc-plugin-style-css](#roc-plugin-style-css)
  * [build-webpack](#build-webpack-2)
* [roc-package-web-component-dev](#roc-package-web-component-dev)
  * [build-webpack](#build-webpack-3)

## roc-abstract-package-base-dev

### after-clean

Runs after clean command is executed. Logs that the action has been completed successfully.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `after-clean`  
__Have post:__ No  

### before-clean

Runs before clean command is executed. Returns an array of paths that should be removed.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `before-clean`  
__Have post:__ No  

## roc-plugin-babel

### babel-config

Base Babel configuration

__Connects to extension:__ Not specified  
__Connects to hook:__ `babel-config`  
__Have post:__ Yes  

## roc-package-webpack-dev

### babel-config

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `babel-config`  
__Have post:__ No  

### build-webpack

Adds base Webpack configuration and read webpack from the configuration.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  
__Have post:__ Yes  

### run-build-command

Build with Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  
__Have post:__ No  

### run-dev-command

Run in development mode using Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  
__Have post:__ No  

## roc-package-webpack-web-dev

### build-webpack

Adds configuration need for web builds for Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  
__Have post:__ No  

### create-watchers

Adds a web watcher using Webpack Dev Server.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `create-watchers`  
__Have post:__ No  

### get-webpack-targets

Adds __web__ as a valid Webpack target.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `get-webpack-targets`  
__Have post:__ No  

## roc-package-module-dev

### babel-config

Adds babel-preset-latest with either modules enabled or not depending on the target

__Connects to extension:__ `roc-package-module-dev`  
__Connects to hook:__ `babel-config`  
__Have post:__ No  

### run-build-command

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  
__Have post:__ No  

### run-dev-command

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  
__Have post:__ No  

## roc-plugin-browsersync

### server-started

Adds a Browsersync instance.

__Connects to extension:__ Not specified  
__Connects to hook:__ `server-started`  
__Have post:__ No  

## roc-plugin-style-css

### build-webpack

Adds CSS support.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  
__Have post:__ No  

## roc-package-web-component-dev

### build-webpack

Adds support for component builds.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  
__Have post:__ No  
