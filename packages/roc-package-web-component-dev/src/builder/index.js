import { getSettings } from 'roc';
/**
 * Creates a builder.
 *
 * @param {!string} target - a target: should be either "client" or "server"
 * @param {rocBuilder} rocBuilder - A rocBuilder to base everything on.
 * @param {!string} [resolver=roc-web/lib/helpers/get-resolve-path] - Path to the resolver for the server side
 * {@link getResolvePath}
 * @returns {rocBuilder}
 */
export default ({ previousValue: rocBuilder }) => (target) => {
    if (target === 'web') {
        return () => {
            const buildSettings = getSettings('build');

            rocBuilder.buildConfig.output.library = buildSettings.name;
            rocBuilder.buildConfig.output.libraryTarget = buildSettings.libraryTarget;
            rocBuilder.buildConfig.output.filename = buildSettings.name +
                (buildSettings.libraryTarget !== 'var' ? '.' + buildSettings.libraryTarget : '') + '.js';

            return rocBuilder;
        };
    }
};
