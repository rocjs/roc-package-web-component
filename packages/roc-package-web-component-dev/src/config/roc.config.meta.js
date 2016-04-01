/* eslint-disable max-len */
import {
    isPath,
    isArray,
    isString,
    isInteger,
    required
} from 'roc/validators';

import {
    toArray
} from 'roc/converters';

const meta = {
    settings: {
        validations: {
            build: {
                name: required(isString),
                targets: isArray(/^web$|^es5$|^es6$/i),
                input: {
                    web: isPath,
                    es5: isPath,
                    es6: isPath
                },
                output: {
                    web: isPath,
                    es5: isPath,
                    es6: isPath
                },
                libraryTarget: /^var$|^this$|^commonjs$|^commonjs2$|^amd$|^umd$/i
            },
            dev: {
                template: {
                    path: isPath,
                    name: isString
                },
                demoPort: isInteger
            }
        },

        descriptions: {
            build: {
                libraryTarget: 'Which format to export the component as.',
                input: {
                    web: 'What file to use as entry file.',
                    es5: 'What directory to build from.',
                    es6: 'What directory to build from.'
                },
                output: {
                    web: 'The output directory for the Web build.'
                }
            },
            dev: {
                template: {
                    path: 'Path to a directory where the template can be found, can be both relative based on ' +
                        'current working directory or absolute.',
                    name: 'The name of the templates. Uses nunjucks and two variables are available, ' +
                        '"name" and "bundlePath".'
                },
                demoPort: 'The port that the demo server starts on.'
            }
        }
    },

    commands: {
        build: {
            settings: ['build'],
            arguments: [{
                name: 'targets',
                validation: isArray(/^web$|^es5$|^es6$/),
                description: 'For what targets the project should be built for, overrides the settings if provided.',
                converter: toArray
            }]
        },
        dev: {
            arguments: [],
            settings: true,
            help: `
            Will start a demo server that will load the component.

            By default an internal template will be used but it can easily be changed. Important to note when changing the template is that http://mozilla.github.io/nunjucks/ is used.

            Two template variables is available:
              projectName   The name of the project, can be used to display <title> and run a JavaScript function.
              bundlePath    The bundle path, used to add the script to the template.`
        }
    }
};

/**
 * Exports the `roc.config.meta.js`.
 *
 * @return {object} The `roc.config.meta.js`.
 */
export default meta;
