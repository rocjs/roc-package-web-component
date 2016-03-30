# Actions for `roc-package-web-component-dev`

## Actions
* [roc-package-base-dev](#roc-package-base-dev)
  * [afterClean](#afterClean)
  * [beforeClean](#beforeClean)
* [roc-package-webpack-dev](#roc-package-webpack-dev)
  * [build](#build)
  * [dev](#dev)
  * [webpack](#webpack)
* [roc-package-webpack-web-dev](#roc-package-webpack-web-dev)
  * [target](#target)
  * [watcher](#watcher)
  * [webpack](#webpack)
* [roc-package-module-dev](#roc-package-module-dev)
  * [babelPresets](#babelPresets)
  * [build](#build)
  * [dev](#dev)
* [roc-plugin-browsersync](#roc-plugin-browsersync)
  * [browsersync](#browsersync)
* [roc-plugin-style-css](#roc-plugin-style-css)
  * [css](#css)
* [roc-package-web-component-dev](#roc-package-web-component-dev)
  * [webpack](#webpack)

## roc-package-base-dev

### afterClean

Runs after clean command is executed. Logs that the action has been completed successfully.

__Connects to extension:__ `roc-package-base-dev`  
__Connects to hook:__ `after-clean`  

### beforeClean

Runs before clean command is executed. Returns an array of strings that should be removed.

__Connects to extension:__ `roc-package-base-dev`  
__Connects to hook:__ `before-clean`  

## roc-package-webpack-dev

### build

Build with Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  

### dev

Run in development mode using Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  

### webpack

Adds base Webpack configuration.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `build-webpack`  

## roc-package-webpack-web-dev

### target

Adds __web__ as a valid Webpack target.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `get-webpack-targets`  

### watcher

Adds a web watcher using Webpack Dev Server.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `create-watchers`  

### webpack

Adds configuration need for web builds for Webpack.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `build-webpack`  

## roc-package-module-dev

### babelPresets

Will add either babel-preset-es2015 (for es5) or babel-preset-es2015-webpack (for es6).

__Connects to extension:__ `roc-package-module-dev`  
__Connects to hook:__ `babel-load-presets`  

### build

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  

### dev

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  

## roc-plugin-browsersync

### browsersync

Adds a Browsersync instance.

__Connects to extension:__ Not specified  
__Connects to hook:__ `server-started`  

## roc-plugin-style-css

### css

Adds CSS support.

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-webpack`  

## roc-package-web-component-dev

### webpack

Adds support for component builds.

__Connects to extension:__ `roc-package-webpack-dev`  
__Connects to hook:__ `build-webpack`  
