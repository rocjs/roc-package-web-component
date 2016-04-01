export const roc = {
    name: require('../package.json').name,
    packages: [
        require.resolve('roc-package-webpack-web'),
        require.resolve('roc-package-module')
    ]
};
