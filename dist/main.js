"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("./utils/Validators");
const AccessControl_1 = require("./utils/AccessControl");
const ContentOperations_1 = require("./operations/ContentOperations");
const testArticle = {
    id: '1',
    title: 'Sample Article',
    content: 'This is a sample article.',
    author: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
};
// Перевірка валідації
console.log('Article validation:', Validators_1.articleValidator.validate(testArticle));
// Операції зі статтями
const newArticle = ContentOperations_1.articleOperations.create(testArticle);
console.log('Created article:', newArticle);
// Перевірка прав доступу
const accessControl = {
    role: 'editor',
    permissions: AccessControl_1.defaultPermissions,
    canPerform: (role, action) => AccessControl_1.defaultPermissions[role][action],
};
console.log('Can editor delete an article?', accessControl.canPerform('editor', 'delete', testArticle));
