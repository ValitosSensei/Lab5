"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValidator = void 0;
// Валідатор для статей
exports.articleValidator = {
    validate: (data) => {
        const errors = [];
        if (!data.title)
            errors.push('Title is required.');
        if (!data.content)
            errors.push('Content is required.');
        return { isValid: errors.length === 0, errors };
    },
};
