import log from 'roc/log/default/small';
import { getSettings } from 'roc';
import koa from 'koa';
import serve from 'koa-static';

import { invokeHook } from '../roc/util';

import nunjucksRendering from './nunjucks';

export default async function dev(rocCommandObject) {
    await invokeHook('run-dev-command', ['web']);

    const server = koa();

    // Load eventual directories to serve
    for (const servePath of rocCommandObject.context.config.settings.dev.serve) {
        server.use(serve(servePath));
    }

    // Add template support through Nunjucks
    server.use(nunjucksRendering());

    const { demoPort } = getSettings('dev');
    server.listen(demoPort);

    log.info(`Demo server started on ${demoPort}`);

    invokeHook('server-started', demoPort, '/');
}
