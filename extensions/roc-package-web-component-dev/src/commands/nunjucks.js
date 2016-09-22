import path from 'path';

import { getSettings, getAbsolutePath } from 'roc';
import nunjucks from 'nunjucks';

export default function nunjucksRendering() {
    const { output, name } = getSettings('build');
    const { template } = getSettings('dev');

    // Read the webpack.stats.json
    // eslint-disable-next-line
    const stats = require(path.join(getAbsolutePath(output.web), 'webpack-stats.json'));

    const templatePath = template.path ||
        path.join(__dirname, '..', '..', 'templates');

    nunjucks.configure(getAbsolutePath(templatePath), {
        watch: true,
    });

    return function* demoRenderer() {
        const trailingSlash = this.path[this.path.length - 1] === '/';
        const templateFile = trailingSlash ?
            `${this.path.substring(1)}index.html` :
            this.path.substring(1);
        try {
            this.body = nunjucks.render(templateFile, {
                name,
                bundlePath: stats.script,
            });
        } catch (err) {
            this.status = 404;
        }
    };
}
