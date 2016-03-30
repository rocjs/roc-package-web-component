import { runHook } from 'roc';

export const name = require('../../package.json').name;

export function invokeHook(...args) {
    return runHook(name)(...args);
}
