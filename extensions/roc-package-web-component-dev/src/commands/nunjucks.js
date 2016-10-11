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

    // eslint-disable-next-line
    return function* demoRenderer() {
        const templateVariables = Object.assign({
            name,
            bundlePath: stats.script,
        }, template.variables);
        const trailingSlash = this.path[this.path.length - 1] === '/';
        const templateFile = trailingSlash ?
            `${this.path.substring(1)}index.html` :
            this.path.substring(1);
        try {
            this.body = nunjucks.render(templateFile, templateVariables);
        } catch (err) {
            this.status = 404;
        }
    };
}
