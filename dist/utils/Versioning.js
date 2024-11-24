"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versioningOperations = void 0;
const versioningOperations = (content) => ({
    createNewVersion: (updates) => (Object.assign(Object.assign(Object.assign({}, content), updates), { version: content.version + 1, previousVersions: [...(content.previousVersions || []), Object.assign({}, content)] })),
});
exports.versioningOperations = versioningOperations;
