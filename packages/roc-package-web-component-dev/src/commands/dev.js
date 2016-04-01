import path from 'path';
import { getSettings, getAbsolutePath } from 'roc';
import koa from 'koa';
import nunjucks from 'nunjucks';

import { invokeHook } from '../roc/util';

export default async function dev(rocCommandObject) {
    await invokeHook('run-dev-command', ['web']);

    const { output, name } = getSettings('build');

    // Read the webpack.stats.json
    const stats = require(path.join(getAbsolutePath(output.web), 'webpack-stats.json'));

    const templatePath = rocCommandObject.configObject.settings.dev.template.path ||
        path.join(__dirname, '..', '..', 'templates');

    nunjucks.configure(getAbsolutePath(templatePath), {
        watch: true
    });

    const server = koa();

    server.use(function *() {
        this.body = nunjucks.render(rocCommandObject.configObject.settings.dev.template.name, {
            name,
            bundlePath: stats.script
        });
    });

    const { demoPort } = getSettings('dev');

    server.listen(demoPort);

    console.log('Demo server started on ' + demoPort);

    invokeHook('server-started', demoPort, '/');
}
