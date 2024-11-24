"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPermissions = void 0;
exports.defaultPermissions = {
    admin: { create: true, read: true, update: true, delete: true },
    editor: { create: true, read: true, update: true, delete: false },
    viewer: { create: false, read: true, update: false, delete: false },
};
