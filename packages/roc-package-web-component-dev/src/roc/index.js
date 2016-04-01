import {
    isArray,
    isInteger,
    isPath,
    isString
} from 'roc/validators';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';
import { name } from './util';
import builder from '../builder';

export default {
    name,
    config,
    meta,
    actions: {
        webpack: {
            description: 'Adds support for component builds.',
            extension: 'roc-package-webpack-dev',
            hook: 'build-webpack',
            action: () => builder
        }
    },
    hooks: {
        'server-started': {

            arguments: [{
                name: 'port',
                validation: isInteger,
                description: 'The port that the server has started on.'
            }, {
                name: 'path',
                validation: isPath,
                description: 'The path that the server has started on.'
            }]
        },

        'run-dev-command': {
            description: 'Use to add things that should react to the dev command being called, will start dev server',
            arguments: [{
                name: 'targets',
                validation: isArray(isString),
                description: 'Will always be `["web"]`.'
            }]
        }
    },
    packages: [
        require.resolve('roc-package-webpack-web-dev'),
        require.resolve('roc-package-module-dev'),
        require.resolve('roc-package-web-component')
    ],
    plugins: [
        require.resolve('roc-plugin-browsersync'),
        require.resolve('roc-plugin-style-css')
    ]
};
