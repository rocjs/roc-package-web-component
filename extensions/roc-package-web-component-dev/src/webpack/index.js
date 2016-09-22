import { getSettings } from 'roc';

export default ({ previousValue: webpackConfig }) => (target) => {
    if (target === 'web') {
        return () => {
            const newWebpackConfig = { ...webpackConfig };
            const buildSettings = getSettings('build');

            newWebpackConfig.output.library = buildSettings.name;
            newWebpackConfig.output.libraryTarget = buildSettings.libraryTarget;
            newWebpackConfig.output.filename = buildSettings.name + // eslint-disable-line
                (buildSettings.libraryTarget !== 'var' ? '.' + buildSettings.libraryTarget : '') + '.js'; // eslint-disable-line

            return newWebpackConfig;
        };
    }

    return undefined;
};
